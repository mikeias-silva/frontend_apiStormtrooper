(($, window, document, undefined) => {
    const render = ($target, data) => {
        const trs = data.map((item, index) => {
            return `<tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.nickname}</td>
            <td>${item.patent}</td>
            </tr>`
        })
        $target.find('tbody').html(trs.join(''))
    }
    const $target = $('#target')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/troopers'
    })
        .then(data => render($target, data))
})(jQuery, window, document)