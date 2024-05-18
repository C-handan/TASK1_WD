async function main() {
    try {
        const response = await fetch('https://coding-week-2024-api.onrender.com/api/data')
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();

        //setting images for tiles
        for (let i = 1; i <= 4; i++) {
            const element = document.getElementById("photo" + i);
            const pho = data[i - 1].image;
            element.style.backgroundImage = `url(${pho})`;
        }

        //setting up their headlines
        for (let i = 1; i <= 4; i++) {
            const element = document.getElementById("text" + i);
            const word = data[i - 1].headline;
            element.innerHTML = word;
        }

        //for sidepanel photo
        for (let i = 5; i <= 10; i++) {
            const ele = document.getElementById("sdb" + (i - 4));
            const poo = data[i - 1].image;
            ele.style.backgroundImage = `url(${poo})`;
        }

        //for sidepanel headline
        for (let i = 5; i <= 10; i++) {
            const ele = document.getElementById("sdt" + (i - 4));
            const poo = data[i - 1].headline;
            ele.innerHTML = poo;
        }

        // tiles tags
        for (let i = 2; i <= 4; i++) {
            const ele = document.getElementById("photo" + i + "_tag");
            const po = data[i - 1].type;
            ele.innerHTML = po;
        }

        for (let i = 1; i <= 10; i++) {
            const ele = document.getElementById("dte" + i);
            const poo = data[i - 1].date;
            console.log(poo);
            ele.innerHTML = poo;
        }


        //showing content in tiles
        const clickdiv1 = document.getElementById('photo1')
        const txt1 = document.getElementById('p1')
        const ft1 = document.getElementById('f1')
        const foo1 = document.getElementById('culture')
        const t1 = document.getElementById('text1')
        clickdiv1.addEventListener('dblclick', () => {
            txt1.innerHTML = data[0].content;
            txt1.style.display = 'flex';
            txt1.style.color = 'rgba(255,255,255,1)';
            ft1.style.display = 'none';
            foo1.style.display = 'none';
            t1.style.display = 'none';
        })
        const clickdiv2 = document.getElementById('photo2')
        const txt2 = document.getElementById('p2')
        const ft2 = document.getElementById('f2')
        const foo2 = document.getElementById('photo2_tag')
        const t2 = document.getElementById('text2')
        clickdiv2.addEventListener('dblclick', () => {
            txt2.innerHTML = data[1].content;
            txt2.style.display = 'flex';
            txt2.style.color = 'rgba(255,255,255,1)';
            ft2.style.display = 'none';
            foo2.style.display = 'none';
            t2.style.display = 'none';
        })
        const clickdiv3 = document.getElementById('photo3')
        const txt3 = document.getElementById('p3')
        const ft3 = document.getElementById('f4')
        const foo3 = document.getElementById('photo3_tag')
        const t3 = document.getElementById('text3')
        clickdiv3.addEventListener('dblclick', () => {
            t3.style.display = 'none';
            txt3.innerHTML = data[2].content;
            txt3.style.display = 'flex';
            txt3.style.color = '#020115';
            ft3.style.display = 'none';
            foo3.style.display = 'none';
        })
        const clickdiv4 = document.getElementById('photo4')
        const txt4 = document.getElementById('p4')
        const ft4 = document.getElementById('f3')
        const foo4 = document.getElementById('photo4_tag')
        const t4 = document.getElementById('text4')
        clickdiv4.addEventListener('dblclick', () => {
            txt4.innerHTML = data[3].content;
            txt4.style.display = 'flex';
            txt4.style.color = '#8B0000';
            ft4.style.display = 'none';
            foo4.style.display = 'none';
            t4.style.display = 'none';
        })



        //toggling the contents and headlines
        const clickdiv1r = document.getElementById('photo1')
        const txt1r = document.getElementById('p1')
        clickdiv1r.addEventListener('click', () => {
            txt1r.style.display = 'none';
            ft1.style.display = 'flex';
            foo1.style.display = 'flex';
            t1.style.display = 'flex';
        })

        const clickdiv2r = document.getElementById('photo2')
        const txt2r = document.getElementById('p2')
        clickdiv2r.addEventListener('click', () => {
            txt2r.style.display = 'none';
            ft2.style.display = 'flex';
            foo2.style.display = 'flex';
            t2.style.display = 'flex';
        })

        const clickdiv3r = document.getElementById('photo3')
        const txt3r = document.getElementById('p3')
        clickdiv3r.addEventListener('click', () => {
            txt3r.style.display = 'none';
            ft3.style.display = 'flex';
            foo3.style.display = 'flex';
            t3.style.display = 'flex';
        })

        const clickdiv4r = document.getElementById('photo4')
        const txt4r = document.getElementById('p4')
        clickdiv4r.addEventListener('click', () => {
            txt4r.style.display = 'none';
            ft4.style.display = 'flex';
            foo4.style.display = 'flex';
            t4.style.display = 'flex';
        })


        //manually showing contents for sidepanel
        const clickdiv5 = document.getElementById("sdb1");
        clickdiv5.addEventListener('dblclick', () => {
            const cont = data[4].content;
            console.log(cont);
            alert(cont);
        })
        const clickdiv6 = document.getElementById("sdb2");
        clickdiv6.addEventListener('dblclick', () => {
            const cont = data[5].content;
            console.log(cont);
            alert(cont);
        })
        const clickdiv7 = document.getElementById("sdb3");
        clickdiv7.addEventListener('dblclick', () => {
            const cont = data[6].content;
            console.log(cont);
            alert(cont);
        })
        const clickdiv8 = document.getElementById("sdb4");
        clickdiv8.addEventListener('dblclick', () => {
            const cont = data[7].content;
            console.log(cont);
            alert(cont);
        })
        const clickdiv9 = document.getElementById("sdb5");
        clickdiv9.addEventListener('dblclick', () => {
            const cont = data[8].content;
            console.log(cont);
            alert(cont);
        })
        const clickdiv10 = document.getElementById("sdb6");
        clickdiv10.addEventListener('dblclick', () => {
            const cont = data[9].content;
            console.log(cont);
            alert(cont);
        })






        //catch block     
    }
    catch (error) {
        console.log(error);
    }
}
main();






