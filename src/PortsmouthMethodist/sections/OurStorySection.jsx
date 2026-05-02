import { Divider, Row, TextContent } from "../../components/Section";
import { Image } from "./Image";

export default function OurStorySection() {
    return (
        <>
            <Row>
                <Image path="Copnor.png"/>
                <TextContent>
                <div class="py-3">
                    <p class="mt-2 text-xl font-bold tracking-tight text-colour sm:text-3xl">Copnor Methodist</p>
                    <p class="mt-6 py-2 text-lg leading-8 text-colour">
                        Built in 1932, Copnor Methodist Church replaced the earlier Wesleyan Mission church (1911). It developed into a strong community hub in the Copnor area. In 1957 it was expanded with school rooms, reflecting its growing congregation and its focus on youth engagement.</p>
                    <p class="mt-6 py-2 text-lg leading-8 text-colour">During the 1960s–1980s, the church was particularly active, running a wide range of programmes and playing a significant role in the local community. It was involved with organisations such as the Boys’ and Girls’ Brigades, and supported families through events, gatherings, and practical outreach including food provision and community support.</p>
                    <p class="mt-6 py-2 text-lg leading-8 text-colour">In later years, the church became especially known for its walking nativity events, which attracted large attendances and often included live animals. Eventually, the building suffered structural problems, leading to its closure.</p>
                </div> 
                </TextContent> 
            </Row>
            <Row>
                <Image path="Eastney.png"/>
                <TextContent>
                <div class="py-3">
                    <p class="mt-2 text-xl font-bold tracking-tight text-colour sm:text-3xl">Eastney Methodist</p>
                    <p class="mt-6 py-2 text-lg leading-8 text-colour"> The land for eastney was first bought in 1877, with a temporary with temporary building in 1885 before 1927 when the permanent church was built. In 2003 this was refurbished for modern use. It was a community centered church on highland road. It was a small church with welcoming service and informal in tone. It regularly runs a toddler group "Friday Frolics" and shared midday meal with a talk called "Soup and a Pud"</p>
                </div> 
                </TextContent> 
            </Row>
            <Row>
                <Image path="PortsmouthMethodist.jpg"/>
                <TextContent>
                <div class="py-3">
                    <p class="mt-2 text-xl font-bold tracking-tight text-colour sm:text-3xl">Trinity Methodist</p>
                    <p class="mt-6 py-2 text-lg leading-8 text-colour">
                    Formerly named Albert Road Wesleyan Church, it was first established in 1892 and made permanent in 1901. The building was designed in a classical Venetian style, similar to that of St Mark’s in Venice. The interior remains completely unchanged and is believed to be the only surviving example of this style from the Victorian era. The church has always maintained a committed congregation coming from the wesleyan tradition of methodism.
                    </p>
                </div> 
                </TextContent> 
            </Row>
            <Divider>
                <Image path="Logo.svg" shadow={false}/>
                <TextContent>
                    <p class=" text-xl font-bold tracking-tight text-colour sm:text-3xl">Together: Portsmouth Methodist</p>
                    <p class=" py-2 text-lg leading-8 text-colour">
                        The churches united in 2018 to form Portsmouth Methodist Church, marking a significant moment of renewal and shared purpose. This followed by structural issues at Copnor Methodist Church and alongside a wider and intentional process of consolidation within the Methodist circuit.
                    </p>
                    <p class=" py-2 text-lg leading-8 text-colour">
                        In the years that followed, including developments around 2022, worship and church life became further centralised, bringing together strengths, people, and ministries from across the congregations. Under this united structure, the church has sought to continue serving the local community with renewed energy; sharing resources more effectively, deepening Christian discipleship, and strengthening its commitment to worship, outreach, and pastoral care.
                    </p>
                </TextContent> 
            </Divider>
            
        </>
    );
}