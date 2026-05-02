import { Quote } from "../components/Text";
import { Divider, Page } from "../components/Section";
import { TextContent } from "../components/Section";

export default function Error() {
  return (
    <>
        <Page>
            <Divider>
                <TextContent>
                    <Quote quote="Error 404: Couldn't find page" reference=
                        {
                            <a href="https://twowaystolive.com/" 
                                class="mx-auto px-5 mt-6 underline max-w-2xl text-center text-lg leading-8 text-colour">
                                Find Christ instead :)
                            </a>
                        }>
                    </Quote>
                </TextContent>
            </Divider>
        </Page>
    </>
  );
}