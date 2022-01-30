import React from "react"

export function Square({ i, j, value, tarla, setTarla}) {
    const isBomb = tarla[i][j].value === 'BOMB';
    const [isOpen, setIsOpen] = React.useState(false);

    const onClick = () => {
        setIsOpen(true);
        if(isBomb) {
            setTimeout(() => {
                alert('Mayına Bastın, Oyun Bitti!')
                window.location.reload();
            }, 1000)
            return;
        }

        for(let ii = i; ii < 16; ii++) {
            for (let jj = j; jj < 16; jj++) {
                const isBomb = tarla[ii][jj].value === 'BOMB';

                if (!isBomb) {
                    tarla[i][j].isOpen = true;
                } else {
                    break;
                }
            }
        }

        for(let ii = i; ii < 16; ii++) {
            for (let jj = j; jj >= 0; jj--) {

            }
        }

        for(let ii = i; ii >= 0; ii--) {
            for (let jj = j; jj < 16; jj++) {

            }
        }

        for(let ii = i; ii >= 0; ii--) {
            for (let jj = j; jj >= 0; jj--) {

            }
        }
        setTarla(tarla)
    }
    return (
        <div onClick={onClick} className={isOpen ? 'column open' : 'column'}>{isOpen ? value.value : ''}</div>
    )
}