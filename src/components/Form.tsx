import { Signal, createSignal, For } from "solid-js";
import { Input } from "~/primitives/Input";
import { Radio } from "~/primitives/Radio";
import { TextArea } from "~/primitives/textArea";
import { Pill } from "~/primitives/Pill";
import emailjs from "@emailjs/browser";
import { setShowForm } from "./ContactForm";

// Radio Data
export const radioValues = ["Mobile App", "SaaS Product", "Landing Page"];
const radioName = "Product";
export const [activeRadio, setActiveRadio] = createSignal(radioValues[0])

// Pill Data
export const servicePillData = [ "Design + Build","Design","Build" ]; 
export const [servicePill, setServicePill] = createSignal(servicePillData[0]);
const selectorStyle ="flex gap-1 p-1 mr-auto border border-white/10 rounded-2xl";

const [sending, setSending] = createSignal(false);
export const [sent, setSent] = createSignal(false);

//H1 Style
const h1Style = "text-white/60 text-[38px] md:text-[48px] transtision-all duration-500";

export function Form () {
    const formStyle="flex flex-col gap-4 w-full";
    const sendButtonStyle = "flex gap-2 bg-[#256AF4] text-white border border-white/10 p-2 px-6 rounded-xl hover:shadow-2xl hover:shadow-[#256AF4] transition-all duration-500";

    const handleSubmit = async ( e:any ) => {
        e.preventDefault();
        setSending(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        data.timestamp = new Date().toISOString();
        data.source = "Upshore Website";
        data.user_agent = navigator.userAgent;
        data.service = servicePill();
        data.product = activeRadio();

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setSent(true);
            e.target.reset();
        }
        catch (error) {
            console.error("Failed to send the email:", error);
            alert("Sorry! Something went wrong - please try again.");
        }
        finally {
            setSending(false);
        }
    }

    return (
        <form class={formStyle} onSubmit={handleSubmit} id="contactForm">
            
            {/* Service Pill */}
            <div class={selectorStyle}>
                <For each={servicePillData}>
                    {(pill)=> <Pill pill={pill}/>}
                </For>
            </div>

            {/* H1 */}
            <h1 class={h1Style}>Let's <span class="text-white/80 group-hover:text-white transtision duration-1000">{servicePill()}</span> Something Great Together</h1>
            
            {/* Radio */}
            <div class="flex gap-2 md:gap-4 mt-4">
                <For each={radioValues}>
                    {(radio)=> <Radio name={radioName} value={radio} required />}
                </For>
            </div>

            {/* Input */}
            <div class="flex w-full gap-2 md:gap-4">
                <Input type="text" name="name" id="name" placeholder="Full Name" label="Your Full Name" required/>
                <Input type="email" name="email" id="email" placeholder="youraddress@email.com" label="Your Email Address" required />
            </div>

            {/* TextArea */}
            <div class="w-full" >
                <TextArea id="Message" name="message" placeholder="Summarize your project in a few lines" label="Tell us what you need" required />
            </div>

            {/* Send Button */}
            <div class="flex w-full gap-4 place-content-between md:mt-4 items-center">
                <p class="text-white/60 max-w-[300px]">By clicking on the button you agree to the processing of your personal data</p>
                <button type="submit" class={sendButtonStyle} disabled={sending()}
                        classList={{"bg-white/10" : sending()===true}}>
                    <p>{sending() ? "Sending..." : sent() ? "Sent" : "Send"}</p>
                    <img src="/icons/PaperPlane.svg" class="w-4 h-4"/>
                </button>
            </div>
        </form>
    )
}