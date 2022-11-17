import React from "react";
import layerDungeon from '../Images/dungeon.jpg';

export default class Dungeon extends React.Component {
    render() {
        return (
            <article className="main-article" style={{backgroundImage: `url(${layerDungeon})`}}>
                <div className="main-article-content">
                    <h2 className="main-article-header">My skills</h2>
                    <div className="main-article-paragraph row">
                        <div className="col-4">
                            <div className="main-article-title">Base</div>
                            <div>JavaScript, Css, Html, Github, jQuery</div>
                        </div>
                        <div className="col-4">
                            <div className="main-article-title">React-Redux</div>
                            <div>React-hooks, Redux-Toolkit</div>
                        </div>
                        <div className="col-4">
                            <div className="main-article-title">Others</div>
                            <div>HTTP, DOM api, ajax, axios</div>
                        </div>
                    </div>
                </div>
                <div className="copy">Tg</div>
            </article>
        )
    }
}