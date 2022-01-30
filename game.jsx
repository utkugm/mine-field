import React from "react"
import ReactDOM from "react-dom"
import { Square } from "./square";

function App() {
    const [tarlas, setTarla] = React.useState([]);
    const mayinlar = [];
    const mayinSayisi = 30;
    React.useEffect(() => {
        for (let z = 0; z < mayinSayisi; z++) {
            mayinlar[z] = {
                row: Math.floor(Math.random() * 16),
                column: Math.floor(Math.random() * 16)
            }
        }
    
        const tarla = [];
        for (let i = 0; i < 16; i++) {
            tarla[i] = [];
            for (let j = 0; j < 16; j++) {
                const isMayin = mayinlar.some((mayin) => {
                    return mayin.row === i && mayin.column === j;
                })
                tarla[i][j] = {
                    value: isMayin ? 'BOMB' : 0,
                    isOpen: false,
                };
            }
        }
    
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                const isMayin = mayinlar.some((mayin) => {
                    return mayin.row === i && mayin.column === j;
                })
    
                if (!isMayin) {
                    let komsular = [
                        tarla[i][j-1],
                        tarla[i][j+1],
                    ];
    
                    if(tarla[i-1]) {
                        komsular = [
                            ...komsular,
                            tarla[i-1][j-1],
                             tarla[i-1][j],
                            tarla[i-1][j+1],
                        ]
                    }
    
                    if(tarla[i+1]) {
                        komsular = [
                            ...komsular,
                            tarla[i+1][j+1],
                            tarla[i+1][j],
                            tarla[i+1][j-1]
                        ]
                    }
                    const mayinlilar= komsular.filter((komsu) =>{
                        console.log(komsu)
                        return komsu && komsu.value==="BOMB"
    
                    });
    
                    tarla[i][j] = {
                        value:  mayinlilar.length,
                        isOpen: false,
                    }
                }
            }
        }
    
        setTarla(tarla)
    
    }, [])

    if(!tarlas) return null;
   
    return (
        tarlas.map((parsel, ind) => {
            return (
            <div key={"row" + ind} className="row">
                {parsel.map((kare, indk) => {
                    return <Square key={"column" + indk} setTarla={setTarla} value={kare} i={ind} j={indk} tarla={tarlas} />})}
            </div>
                )
        })
    )
}

ReactDOM.render(<App/>, document.getElementById("game"))
