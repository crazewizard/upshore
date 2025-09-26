declare module "solid-slider";
declare module "solid-slider/plugins/*";

declare module "solid-slider" {
    import type { JSX } from "solid-js";

    export type PerView = number | "auto";
    
    export interface SlidesSettings {
        /** number of slides visible or "auto" to respect each slide's CSS width */
        perView?: PerView;
        /** spacing in pixels between slides */
        spacing?: number;
        /** alignment/origin of slides (library dependent) */
        origin?: number | "center";
        /** whether to contain slides inside track */
        contain?: boolean;
        /** padding can be number or object with left/right */
        padding?: number | { left?: number; right?: number };
    }

    export interface SliderOptions {
        loop?: boolean;
        duration?: number;
        initial?: number;
        slides?: SlidesSettings;
        // allow other Keen/solid-slider options without type errors
        [key: string]: any;
    }
  
    export function createSlider(
      options?: SliderOptions
    ): [
      (el: HTMLElement) => void,
      {
        next: () => void;
        prev: () => void;
        current: () => number;
        moveTo: (n: number) => void;
        details: () => { slides: Array<{ abs: number; rel: number; size: number }> };
      }
    ];
  
    export const Slider: (props: {
      options?: SliderOptions;
      plugins?: any[];
      children: JSX.Element;
      class?: string;
    }) => JSX.Element;
  
    export const SliderProvider: (props: { children: JSX.Element }) => JSX.Element;
    export const SliderButton: (props: { next?: boolean; prev?: boolean; children: JSX.Element }) => JSX.Element;
  }