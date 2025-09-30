import { UpshoreButton } from "~/primitives/UpshoreButton";
import { showForm, setShowForm } from "./ContactForm";
import { ContactForm } from "./ContactForm";

const buttonStyle = "min-w-[48px] h-[48px] rounded-xl overflow-hidden red-pulse  cursor-pointer";

export function ContactCTA() {
    return (
        <div class="fixed flex bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 w-full md:w-[600px] z-50 px-4 md:px-0 justify-center">
            {showForm() && <ContactForm />}
            <div onclick={() => setShowForm(true)}
                class="pulseparent group cursor-pointer w-full md:w-[300px]">

                <div class="flex p-2 rounded-[20px] bg-black/80 border backdrop-blur-md border-white/20 hover:bg-black/95 transition-bg duration-500">
                    <div class="w-full h-[48px] place-content-around opacity-60 group-hover:opacity-100 transition-opacity duration-500 ease-linear">
                        <h4 class="text-[20px] !text-white text-center cursor-pointer">Let’s work together!</h4>
                    </div>
                    <UpshoreButton icon="Mail-icon" style={buttonStyle} action={() => setShowForm(true)} />
                </div>
            </div>
        </div>
    )
}

