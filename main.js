(function draw() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')

    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(-Math.PI / 2)
    let lineGrad = ctx.createLinearGradient(200, 0, -200, 0)
    lineGrad.addColorStop(0, '#fff')
    lineGrad.addColorStop(1, '#F8ECFD')
    ctx.fillStyle = lineGrad
    ctx.beginPath()
    ctx.arc(0, 0, canvas.width / 2 - 20, 0, Math.PI * 2, true)
    ctx.fill()
        //小时
    ctx.save()
    for (let i = 1; i <= 12; i++) {
        ctx.beginPath()
        ctx.strokeStyle = '#A82FFC'
        ctx.lineWidth = 4
        ctx.rotate(Math.PI / 6)
        ctx.moveTo(280, 0)
        ctx.lineTo(230, 0)
        ctx.stroke()
    }
    ctx.restore()

    //分钟
    ctx.save()
    ctx.beginPath()
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            ctx.beginPath()
            ctx.strokeStyle = "#C264FE"
            ctx.lineWidth = 2
            ctx.moveTo(280, 0)
            ctx.lineTo(250, 0)
            ctx.stroke()
        }
        ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    //文字
    ctx.save()
    ctx.rotate(Math.PI / 2)
    ctx.fillStyle = "#7A08FA"
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = '46px microsoft yahei'
    ctx.fillText('3', 210, 0)
    ctx.fillText('6', 0, 210)
    ctx.fillText('9', -210, 0)
    ctx.fillText('12', 0, -210)
    ctx.restore()


    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()
        // hours = (hours > 12) ? (hours - 12)： hours
    if (hours > 12) {
        hours -= 12
    }

    //时针
    ctx.save()
    ctx.rotate(hours * (Math.PI / 6) + minutes * (Math.PI / 360) + seconds * (Math.PI / 3600))
    ctx.lineWidth = 18
    ctx.strokeStyle = '#C264FE'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(140, 0)
    ctx.stroke()
    ctx.fillStyle = '#fff'
    ctx.arc(120, 0, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    //分针
    ctx.save()
    ctx.rotate(minutes * (Math.PI / 30) + seconds * (Math.PI / 1800))
    ctx.lineWidth = 12
    ctx.strokeStyle = '#C264FE'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(200, 0)
    ctx.stroke()

    ctx.lineWidth = 3
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(190, 0)
    ctx.lineTo(170, 0)
    ctx.stroke()
    ctx.restore()

    //秒针
    ctx.save()
    ctx.rotate(seconds * (Math.PI / 30))
    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#C264FE'
    ctx.moveTo(0, 0)
    ctx.lineTo(220, 0)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 12
    ctx.strokeStyle = '#C264FE'
    ctx.moveTo(0, 0)
    ctx.lineTo(-38, 0)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.fillStyle = '#fff'
    ctx.arc(0, 0, 12, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.strokeStyle = '#C264FE'
    ctx.arc(0, 0, 13, 0, Math.PI * 2, true)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = '#C264FE'
    ctx.lineWidth = 1
    ctx.arc(0, 0, 8, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
        //边框
    let lineGrad2 = ctx.createLinearGradient(200, 0, -200, 0)
    ctx.beginPath()
    ctx.lineWidth = 6
    lineGrad2.addColorStop(0, "#7A08FA")
    lineGrad2.addColorStop(1, "#A82FFC")
    ctx.strokeStyle = lineGrad2
    ctx.arc(0, 0, canvas.width / 2 - 20, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    window.requestAnimationFrame(draw)
})()
