import Layout from '../componens/MyLayout'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'

export default function Show(props){
    return(
        <Layout>
            <h1>{props.name}</h1>
            <p>{props.summary.replace(/<[/]?[pb]>/g,'')}</p>
            {props.image ? <img src={props.image.medium} /> : null}
        </Layout>
    )
}

Show.getInitialProps = async(context)=>{
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    return data
}

