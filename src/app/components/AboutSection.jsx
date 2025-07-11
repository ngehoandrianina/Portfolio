"use client";
import react,{useTransition,useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Cassroll from "./Cassroll";



const  AboutSection = () =>{
    const TAB_DATA = [
        {
            title: 'Education',
            id:'Education',
            content : (
                <ul className="list-disc pl-2">
                    <li><b>2025 - </b>3 year of professional bachelor</li>
                    <li><b>2023-2024 - </b>2 year of professional bachelor </li>
                    <li><b>2022-2023 - </b>1st year of professional bachelor</li>
                    <li><b>2022 - </b>BACC series S with Fairly Good</li>
                </ul>
            )
        },
      {
            title: 'skills',
            id:'skills',
            content : (
                <ul className="list-disc pl-2 flex">
                    <ul className="mr-2"> <li><b>Fronted</b></li>
                        <li>-React native</li>
                        <li>-ReactJS</li>
                        <li>-NextJS</li>
                        <li>-HTML</li>
                        <li>-tailwindcss</li>
                        <li>-Bootstrap</li>
                    </ul>
                    <ul className="mr-2"> <li><b>Backend</b></li>
                        
                        <li>-NodeJS</li>
                        <li>-Express</li>
                        <li>-Django</li>
                        <li>-Flask</li>
                        <li>-Fast API</li>
                    </ul>
                    <ul> <li><b>DBMS</b></li>
                        <li>-Mysql</li>
                        <li>-Postgresql</li>
                    </ul>
                </ul>
            )
        },
        {
            title: 'Tools',
            id:'Tools',
            content : (
                <ul className="list-disc pl-2">
                    <li>Vs Code</li>
                    <li>Netbeans</li>
                    <li>Xammp</li>
                </ul>
            )
        },
        {
            title: 'OS',
            id:'OS',
            content : (
                <ul className="list-disc pl-2">
                    <li>Unix</li>
                    <li>Windows</li>
                </ul>
            )
        },
        {
            title: 'experience',
            id:'experience',
            content : (
                <ul className="list-disc pl-2">
                    <li className="list-none">experience :</li>
                    <li>Participant in DevHunt 4.0</li>
                    <li>4th place in DevHunt 5.0</li>
                    <li>1 september - 24 november 2024 : I am an IT intern at Aquarelle Madagascar </li>
                    <li className="list-none">Hackathon :</li>
                </ul>
            )
        },
    ]
    const [tab,setTab] = useState('skills');
    const [Ispending,StartTransition] =  useTransition();

    const handleTabChange =  (id) =>{
        StartTransition(()=>
        {
            setTab(id)
        })
    }
    const image = [
        '/image/iah4.jpg',
        '/image/iah8.jpg',
        '/image/iah2.jpg',
        '/image/photoko.jpg' 
    ]
    return(
        <section className="text-white ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16  sm:py-16 xl:px-16 "> 
                <Cassroll >
                    {
                        image.map((image,index)=>(
                            <img src={image}  key={index} className="rounded-xl" />
                        ))
                    }
                </Cassroll>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg ">I am curently in my third year of professional bachelor's degree at the Ecole Nationale d'Informatique ENI, following thw General Computer Science program.
                    this program focuses on two main areas: System and Network Administration and Software Engineering with Database. <br></br> <br></br>
                    Over the past three years, I have specialized in Computer Science through both my coursework and personal research. <br></br> <br></br>
                    At 21 years old, I am passionate about moderne technologies and aspire to accomplish innovative projects, whether in networking,development,or programming.<br></br> <br></br>
                    I continue to progress step by step in this field, with the determination to deepen my knowledge and take on new challenges.</p>
            <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={()=>handleTabChange('Education')} active={tab === 'Education'} > {""}Education{""} </TabButton>
            <TabButton selectTab={()=>handleTabChange('skills')} active={tab === 'skills'} > {""}Skills{""} </TabButton>
            <TabButton selectTab={()=>handleTabChange('Tools')} active={tab === 'Tools'} > {""}Tools{""} </TabButton> 
            <TabButton selectTab={()=>handleTabChange('experience')} active={tab === 'experience'} > {""}experience{""} </TabButton> 
            <TabButton selectTab={()=>handleTabChange('OS')} active={tab === 'OS'} > {""}OS{""} </TabButton>
            </div>
            <div className="mt-8">
            { TAB_DATA.find((t) => t.id === tab).content }
            </div>
                </div>

            </div>
        </section>
    )
}
export default AboutSection;