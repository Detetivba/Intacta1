document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('simuladorIntacta');

    function verificarLogin() {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDoc) {
            // Verifique se o usuário está logado
            const loginStatus = iframeDoc.querySelector('#loginStatus'); // Exemplo: elemento que indica login

            if (loginStatus && loginStatus.textContent.includes('Logado')) {
                window.location.href = 'calculo.html';
            }
        }
    }

    setInterval(verificarLogin, 3000); // Verifique o login a cada 3 segundos
});
document.addEventListener('DOMContentLoaded', function () {
    const tecnologiaSelect = document.forms['f1'].elements['tecnologia'];
    const valorSelect = document.forms['f1'].elements['valor'];
    const estadoSelect = document.forms['f1'].elements['estado'];
    const variedadeSelect = document.forms['f1'].elements['hys'];
    const iframe = document.getElementById('simuladorIntacta');

    function calcula() {
        const tecnologia = tecnologiaSelect.value;
        const valor = valorSelect.value;
        const estado = estadoSelect.value;
        const variedade = variedadeSelect.value;

        if (tecnologia && valor && estado && variedade) {
            console.log(`Tecnologia: ${tecnologia}, Valor: ${valor}, Estado: ${estado}, Variedade: ${variedade}`);
            // Atualize os campos necessários aqui
        }
    }

    function atualizarFormulario() {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDoc) {
            const tecnologia = iframeDoc.querySelector('select[name="tecnologia"]')?.value;
            const valor = iframeDoc.querySelector('select[name="valor"]')?.value;
            const estado = iframeDoc.querySelector('select[name="estado"]')?.value;
            const variedade = iframeDoc.querySelector('select[name="hys"]')?.value;

            tecnologiaSelect.value = tecnologia || '';
            valorSelect.value = valor || '';
            estadoSelect.value = estado || '';
            variedadeSelect.value = variedade || '';

            calcula();
        }
    }

    setInterval(atualizarFormulario, 300000); // Atualize a cada 5 minutos (300000 ms)
});
