import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function Section({id,title,children,className=''}:{id:string;title:string;children:ReactNode;className?:string}){const reduced=useReducedMotion();return <section id={id} aria-labelledby={`${id}-title`} className={`section ${className}`}><div className="container"><motion.div initial={false} whileInView={reduced?{}:{opacity:[0.7,1],y:[12,0]}} viewport={{once:true,amount:0.15}} transition={{duration:.5}}><h2 id={`${id}-title`}>{title}</h2>{children}</motion.div></div></section>}
export function Pending({children='Conteúdo a confirmar'}:{children?:ReactNode}){return <span className="pending">{children}</span>}
export function Brand(){return <Link to="/" className="brand" aria-label="CEFAST Aerospace — início"><img src={`${import.meta.env.BASE_URL}aerospace-logo.jpg`} alt="Logo CEFAST Aerospace" width="70" height="70"/><span><small>CEFAST</small>AEROSPACE</span></Link>}
