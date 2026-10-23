import { useEffect, useRef, useState } from 'react'
import useScrollOnDrag from "react-draggable-scroll";
import styles from './main.module.css';

import cats from "../../assets/2D/3_cats_with_plants.jpg"
import viking from "../../assets/2D/art_chalange_viking_3.jpg"
import dog from "../../assets/2D/Dog_Flower.jpg"
import girl from "../../assets/2D/frekled_Girl_02.jpg"
import jeep from "../../assets/2D/jeep_1980.jpg"
import rover from "../../assets/2D/range_rover.jpg"
import mini from "../../assets/2D/Mini_Painting_2.jpg"
import woman from "../../assets/2D/woman.jpg"

import leffe from "../../assets/Paintings/leffe.jpg"
import fosil from "../../assets/Paintings/Painting_fosil.jpg"
import porsche from "../../assets/Paintings/Painting_porsche.jpg"
import reiger from "../../assets/Paintings/Painting_rijger.jpg"

import brancard from "../../assets/SCM/SCM_Brancard_01.png"
import brancard1 from "../../assets/SCM/SCM_Brancard_02.png"
import brancard2 from "../../assets/SCM/SCM_Brancard_03.png"
import elektrakast from "../../assets/SCM/SCM_Elektrakast_01.jpg"
import elektrakast1 from "../../assets/SCM/SCM_Elektrakast_02.jpg"
import elektrakast2 from "../../assets/SCM/SCM_Elektrakast_03.jpg"
import kratten from "../../assets/SCM/SCM_Kratten_01.png"
import kratten1 from "../../assets/SCM/SCM_Kratten_02.png"
import kratten2 from "../../assets/SCM/SCM_Kratten_03.png"
import label from "../../assets/SCM/SCM_Labelmachine_01.jpg"
import label1 from "../../assets/SCM/SCM_Labelmachine_02.jpg"
import label2 from "../../assets/SCM/SCM_Labelmachine_03.jpg"
import pomp from "../../assets/SCM/SCM_Pomp_01.png"
import pomp1 from "../../assets/SCM/SCM_Pomp_02.png"
import pomp2 from "../../assets/SCM/SCM_Pomp_03.png"
import pomp3 from "../../assets/SCM/SCM_Pomp_04.png"
import pomp4 from "../../assets/SCM/SCM_Pomp_05.png"
import telefoon from "../../assets/SCM/SCM_Telefoon_01.jpg"
import telefoon1 from "../../assets/SCM/SCM_Telefoon_02.jpg"
import telefoon2 from "../../assets/SCM/SCM_Telefoon_03.jpg"
import telefoon3 from "../../assets/SCM/SCM_Telefoon_04.jpg"
import telefoonRood from "../../assets/SCM/SCM_Telefoonrood_01.jpg"
import telefoonRood1 from "../../assets/SCM/SCM_Telefoonrood_02.jpg"
import telefoonRood2 from "../../assets/SCM/SCM_Telefoonrood_03.jpg"
import tonnen from "../../assets/SCM/SCM_Tonnen_01.jpg"
import tonnen1 from "../../assets/SCM/SCM_Tonnen_02.png"
import tonnen2 from "../../assets/SCM/SCM_Tonnen_03.png"
import wasmachine from "../../assets/SCM/SCM_Wasmachine_01.png"
import wasmachine1 from "../../assets/SCM/SCM_Wasmachine_02.png"
import wasmachine3 from "../../assets/SCM/SCM_Wasmachine_03.png"



export function SecondView() {
    const [drie, setDrie] = useState([]);
    const [twee, setTwee] = useState([]);
    const [painting, setPainting] = useState([]);
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("http://localhost/api/load3D.php")
            .then(res => res.json())
            .then(data => {
                setDrie(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost/api/load2D.php")
            .then(res => res.json())
            .then(data => {
                setTwee(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost/api/loadPainting.php")
            .then(res => res.json())
            .then(data => {
                setPainting(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    function Aboutme() {
        return (
            <section className={styles.aboutme} id="aboutMe">
                <figure className={styles.portret}>
                    <img src="#" alt="PF" />
                </figure>
                <article className={styles.aboutmeContent}>
                    <h2>Over Mij</h2>
                    <p>Hallo, ik ben Lisa van Boven, 22 jaar oud en woonachtig in Den Helder.
                        Ik ben een 3D artist met een focus op realisme.
                        Ik heb mijn MBO 4 opleiding gevolgd aan het Mediacollege Amsterdam,
                        waar ik de opleiding Game Artist heb afgerond.
                        Als 3D artist heb ik ervaring in Unreal Engine 5, Blender, Maya, Unity ,
                        Photoshop en Subtanse painter.</p>
                </article>
            </section>
        )
    }

    function Project3D() {
        const containerRef = useRef(null);
        const { events } = useScrollOnDrag(containerRef);

        const images = {
            brancard: brancard,
            elektrakast: elektrakast,
            kratten: kratten,
            label: label,
            pomp: pomp,
            telefoon: telefoon,
            telefoonRood: telefoonRood,
            tonnen: tonnen,
            wasmachine: wasmachine
        }
        return (
            <section className={styles.project} id="3dProjects">
                <h2 className={styles.projectHeader}>3D Projecten</h2>
                <article className={styles.projectCaroussel} {...events} ref={containerRef}>
                    {drie.map(item => (
                        <figure className={styles.projectCard} key={item.id} >
                            <img src={images[item.img]} className={styles.img} />
                            <div className={styles.projectDesc}>
                                <h3>{item.name}</h3>
                                <h4>{item.programmas}</h4>
                                <p>{item.description}</p>
                            </div>
                        </figure>

                    ))}
                </article>
            </section>
        )
    }

    function Painting() {

        const containerRef = useRef(null);
        const { events } = useScrollOnDrag(containerRef);

        const images = {
            leffe: leffe,
            fosil: fosil,
            porsche: porsche,
            reiger: reiger
        }
        return (
            <section className={styles.painting} id='schilderijen'>
                <article className={styles.paintingCaroussel}  {...events} ref={containerRef}>
                    {painting.map(item => (
                        <figure key={item.id} className={styles.paintingCard}>
                            <img src={images[item.img]} className={styles.img} />
                            <div className={styles.paintingDesc}>
                                <h3>{item.name}</h3>
                            </div>
                        </figure>

                    ))}
                </article>
                <h2>Schilderijen</h2>
            </section>
        )
    }

    function Project2D() {
        const containerRef = useRef(null);
        const { events } = useScrollOnDrag(containerRef);

        const images = {
            cat: cats,
            viking: viking,
            dog: dog,
            girl: girl,
            jeep: jeep,
            rover: rover,
            mini: mini,
            woman: woman
        }

        return (
            <section className={styles.project} id="2dProjects">
                <h2 className={styles.projectHeader}>2D Projecten</h2>
                <article className={styles.projectCaroussel} {...events} ref={containerRef}>
                    {twee.map(item => (
                        <figure className={styles.projectCard} key={item.id} >
                            <img src={images[item.img]} className={styles.img} />
                            <div className={styles.projectDesc}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </figure>

                    ))}
                </article>
            </section>
        )
    }

    return (
        <section className={styles.sectionTwo}>
            <Aboutme />
            <Project3D />
            <Painting />
            <Project2D />
        </section>
    )
}