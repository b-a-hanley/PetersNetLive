import { Quote } from "../components/Text";

export default function Error() {
  return (
    <>
        <Page>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl text-center">
                <p class="mt-2 text-4xl font-bold tracking-tight text-colour sm:text-5xl">
                    Error 404: Couldn't find page
                </p>
                <a href="https://twowaystolive.com/" class="mx-auto px-5 mt-6 underline max-w-2xl text-center text-lg leading-8 text-colour">Find Christ instead :)</a>
                </div>
            </div>
            <TextContent>
                <Quote quote="Error 404: Couldn't find page" reference={<a href="https://twowaystolive.com/" class="mx-auto px-5 mt-6 underline max-w-2xl text-center text-lg leading-8 text-colour">Find Christ instead :)</a>}></Quote>
            </TextContent>
        </Page>
    </>
  );
}