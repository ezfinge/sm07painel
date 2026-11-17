const selector = (element) => document.querySelector(element);

pdvsJson.map((pdv) => {
    const pdvsclone = selector('.link').cloneNode(true);
    pdvsclone.classList.remove('off');

    // refs pros cards puxar - sam
    pdvsclone.querySelector('.link a').href = pdv.link;
    pdvsclone.querySelector('.card img').src = pdv.img;

    // Quebra a linha automaticamente no hífen (-) para a numeração ir para baixo
   const nomeFormatado = pdv.name ? pdv.name.replace(/\s*-\s*/g, '<br>') : '';
pdvsclone.querySelector('h2').innerHTML = nomeFormatado;

    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;

    // cor dos pdv - sam
    const desc = pdv.descripion ? pdv.descripion.trim() : '';

    if (desc === 'Rotisseria') {
        pdvsclone.querySelector('.card').style.background = '#000000';
    } 
    else if (desc === 'A La Carte') {
        pdvsclone.querySelector('.card').style.background = '#000000';
    } 
    else if (desc === 'Café') {
        pdvsclone.querySelector('.card').style.background = '#920031c0';
    } 
    else if (desc === 'Churros') {
        pdvsclone.querySelector('.card').style.background = '#920031c0';
    } 
    else if (desc === 'Adega') {
        pdvsclone.querySelector('.card').style.background = '#920031c0';
    } 
    else if (desc === 'Boteco') {
        pdvsclone.querySelector('.card').style.background = '#0f0027';
    } 
    else if (desc === 'Frente de Loja') {
        pdvsclone.querySelector('.card').style.background = '#00eeff71';
    } 
    else if (desc === 'ELETRO' || desc === 'RESERVA') {
        pdvsclone.querySelector('.card').style.background = '#ff3300bd';
    }
    else if (desc.toLowerCase() === 'area nova') {
        pdvsclone.querySelector('.card').style.background = '#00eeff71';
    }

    // Cor exclusiva p pdv 5 e 6 ( drive ) - sam
    if (pdv.name === 'PDV 5 - 424' || pdv.name === 'PDV 6 - 336') {
        pdvsclone.querySelector('.card').style.background = '#1eff0070'; 
    }

    // filtragem da coluna - sam
    const descUpper = desc.toUpperCase();

    if (descUpper === 'FRENTE DE LOJA') {
        selector('#coluna-frente').append(pdvsclone);
    } 
    else if (descUpper === 'AREA NOVA') {
        selector('#coluna-area-nova').append(pdvsclone);
    } 
    else if (descUpper === 'ROTISSERIA' || descUpper === 'A LA CARTE') {
        selector('#coluna-rotisseria-alacarte').append(pdvsclone);
    }
    else if (descUpper === 'BOTECO') {
        selector('#coluna-boteco').append(pdvsclone);
    }
    else if (descUpper === 'ELETRO' || descUpper === 'RESERVA') {
        selector('#coluna-eletro').append(pdvsclone);
    }
    else {
        selector('#coluna-outros').append(pdvsclone);
    }
});
