import { DynamicStyle } from "~/types/DynamicStyle";

export const Bars = ( props: { Style : DynamicStyle} ) => (<div class={`${props.Style} w-full bg-[url('/public/images/Bar.svg')] -z-10 opacity-50" `}/>)