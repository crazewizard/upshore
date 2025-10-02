import { Input } from "~/primitives/Input";
import { Radio } from "~/primitives/Radio";
import { TextArea } from "~/primitives/textArea";

export function Form () {
    const formStyle="flex flex-col gap-4 w-full";
    const sendButtonStyle = "flex gap-2 bg-[#256AF4] text-white border border-white/10 p-2 px-6 rounded-xl hover:shadow-2xl hover:shadow-[#256AF4]";

    return (
        <div class={formStyle}>
            <div class="flex gap-4 mt-4">
                <Radio name="Product type" value="Mobile App" checked/>
                <Radio name="Product type" value="SAAS" />
                <Radio name="Product type" value="Landing Page" />
            </div>

            <div class="flex w-full gap-4">
                <Input type="text" id="name" placeholder="Full Name" label="Your Full Name"/>
                <Input type="email" id="email" placeholder="youraddress@email.com" label="Your Email Address"/>
            </div>
            <div class="w-full" >
                <TextArea id="Message" placeholder="Summarize your project in a few lines" label="Tell us what you need" />
            </div>
            <div class="flex w-full place-content-between mt-4 items-center">
                <p class="text-white/60">By clicking on the button you agree <br /> to the processing of your personal data</p>
                <button class={sendButtonStyle}>
                    <p>Send</p>
                    <img src="/icons/PaperPlane.svg" class="w-4 h-4"/>
                </button>
            </div>
        </div>
    )
}