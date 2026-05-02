import {  Img, Page, Row, TextContent } from "../components/Section";
import { Quote } from "../components/Text";
import { Banner } from "./sections/Banner";

export default function ChurchOnline() {
    return (
        <Page>
    
                <Banner>Online</Banner>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12 px-6">
                    <div class="flex bg-white p-10 ring-button flex-col shadow-xl justify-center rounded-lg md:justify-start">
                        <a href="/st-marys/media/christianity-essentials">
                        <p class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                            Christian Essentials: John 3
                        </p>
                        <p class="mt-6 text-lg leading-8">
                            4 part series of sermons covering the essentials of Christianity led by Rob Brewis.
                        </p>
                        </a>
                    </div> 
                    <div class="flex p-10 bg-white ring-button flex-col shadow-xl justify-center rounded-lg md:justify-start">
                        <a href="/st-marys/media/psalm-45">
                            <p class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                                Psalm 45
                            </p>
                            <p class="mt-6 text-lg leading-8">
                                2 part series of services covering Psalm 45 preached by our very own Rob Brewis.
                            </p>
                        </a>
                    </div>
                    <div class="flex p-10 bg-white ring-button flex-col shadow-xl justify-center rounded-lg md:justify-start">
                        <a href="/st-marys/media/psalm-45">
                        <p class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                            Psalm 45
                        </p>
                        <p class="mt-6 text-lg leading-8">
                            2 part series of services covering Psalm 45 preached by our very own Rob Brewis.
                        </p>
                        </a>
                    </div>
                </div>
        </Page>
    );
}