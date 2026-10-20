import { useEffect, useRef, useState } from 'react'
import useScrollOnDrag from "react-draggable-scroll";

import styles from './main.module.css'

export function SecondView() {
    const [drie, setDrie] = useState([]);
    const [twee, setTwee] = useState([]);
    const [painting, setPainting] = useState([]);

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

    function Projects() {
        const containerRef = useRef(null);
        const {events} = useScrollOnDrag(containerRef);
        return (
            <section className={styles.project} id="3dProjects">
                <h2 className={styles.projectHeader}>3D Projecten</h2>
                <article className={styles.projectCaroussel} {...events} ref={containerRef}>
                        {drie.map(item => (
                            <figure className={styles.projectCard} key={item.id} >
                                <div className={styles.projectDesc}>
                                    <h3>{item.name}</h3>
                                    <button>Lees Verder</button>
                                </div>
                            </figure>

                        ))}
                </article>
            </section>
        )
    }

    function Painting() {
        return (
            <section className={styles.painting} id='schilderijen'>
                <article>
                    {painting.map(item => {
                        <figure key={item.id}>
                            <div>
                                <h3>{item.name}</h3>
                                <button>Read More</button>
                            </div>
                        </figure>

                    })}
                </article>
                <h2>Schilderijen</h2>
            </section>
        )
    }
    return (
        <section className={styles.sectionTwo}>
            <Aboutme />
            <Projects />
        </section>
    )
}