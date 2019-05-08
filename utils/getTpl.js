const getTpl = ( htmlContent , css , js) => {

    return `
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>create-react-project</title>
        <meta charset="UTF-8" />
        <meta property="qc:admins" content="1521476575645356367" />
        <!-- <meta name="google" value="notranslate" /> -->
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        ${css}
    </head>

    <body>
        <div id="root">${htmlContent}</div>
    </body>
    ${js}
    </html>
    `

}

export default getTpl;