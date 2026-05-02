import {  Img, Page, Row, TextContent } from "../../components/Section";

export default function OurStorySection() {
    return (
        <>
            <Row>
                <Img path="/public/assets/shared/Fishing-net.jpg"/>
                <TextContent>
                    <p className="mt-6 text-xl leading-8 text-colour">
                        Born in Portsmouth, Ben, had a natural effinity with technology. At the age of 11 he built an elaborate powerpoint game until he was told of programming. Ben with his new found love went to university to achieve a computer science degree. Whilst looking for work Ben realised he could use his time to craft bespoke church websites.</p>
                    <p className="mt-6 text-xl leading-8 text-colour"> Ben set out with a challenge, to make church websites:</p>
                
                    <p className="font-bold text-xl">• Affordable</p>
                    <p className="font-bold text-xl">• Usable</p>
                    <p className="font-bold text-xl">• Mission focussed</p>
                </TextContent>
            </Row>
        </>
    );
}