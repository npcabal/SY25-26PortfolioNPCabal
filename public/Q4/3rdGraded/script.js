function plotPoint(x0, y0, x, y) {
    // show values in table so user can see input

    console.log(x0, y0, x, y)
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y

    // remove old plotted points so only latest point stays on the plane
    var oldPoints = document.querySelectorAll('.point')
    for (var i = 0; i < oldPoints.length; i++) {
        oldPoints[i].remove()
    }

    // create the red square tht represents residence
    var point = document.createElement('div')
    point.className = 'point'   

    point.style.left = (x - x0 + 200 - 5) + 'px'
    point.style.bottom = (y - y0 + 200 - 5) + 'px'

    document.getElementById('coordinatePlane').appendChild(point)

    // determine correct region name
    if (x > x0 && y > y0) {
        out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0) {
        out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0) {
        out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0) {
        out1.innerHTML = "NO"
    }
    else {
        out1.innerHTML = "divisa"
    }
}