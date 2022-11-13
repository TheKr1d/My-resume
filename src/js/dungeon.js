import React from "react";
import layerDungeon from '../Images/dungeon.jpg';

export default class Dungeon extends React.Component {
    render() {
        return (
            <article className="main-article" style={{backgroundImage: `url(${layerDungeon})`}}>
                <div className="main-article-content">
                    <h2 className="main-article-header">Меня зовут Владислав</h2>
                    <p className="main-article-paragraph">Ищу работу по вакансии frontend-разработчик на позицию Junior, либо оплачиваемую стажировку.</p>
                    <p className="main-article-paragraph">Занимаюсь разработкой уже год. Написал несколько пет-проектов.</p>
                </div>
                <div className="copy">Tg</div>
            </article>
        )
    }
}