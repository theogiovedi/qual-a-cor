export function createSVG(type, color1, color2, color3, color4) {
    const examples = document.getElementById("examples");
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    svg.setAttribute("id", "svg-" + type)
    svg.setAttribute("width", "1276")
    svg.setAttribute("heigth", "1010")
    svg.setAttribute("viewBox", "0 0 1270 1010");
    svg.setAttribute("fill", "none");

    // Dark Mode

    const gray = getComputedStyle(document.querySelector(":root")).getPropertyValue("--gray");
    const darkGray = getComputedStyle(document.querySelector(":root")).getPropertyValue("--dark-gray");

    // Dark Mode Checking

    const white = getComputedStyle(document.querySelector(":root")).getPropertyValue("--white");
    const black = getComputedStyle(document.querySelector(":root")).getPropertyValue("--black");
    const fg = getComputedStyle(document.querySelector(":root")).getPropertyValue("--foreground-color");
    const bg = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");

    const darkModeEnabled = fg == white && bg == black;

    // Horizontal Lines
    for (let i = 0; i < 20; i++) {
        const backgroundLine = document.createElementNS(namespace, "line");
        if (darkModeEnabled) {
            backgroundLine.setAttribute("stroke", darkGray);
        } else {
            backgroundLine.setAttribute("stroke", gray);
        }
        backgroundLine.setAttribute("class", "bg-line")
        backgroundLine.setAttribute("x1", `${317 + (50 * i)}`);
        backgroundLine.setAttribute("y1", "10");
        backgroundLine.setAttribute("x2", `${317 + (50 * i)}`);
        backgroundLine.setAttribute("y2", "1010");
        backgroundLine.setAttribute("stroke-width", "10");
        svg.appendChild(backgroundLine);
    }

    // Vertical Lines
    for (let i = 0; i < 20; i++) {
        const backgroundLine = document.createElementNS(namespace, "line");
        if (darkModeEnabled) {
            backgroundLine.setAttribute("stroke", darkGray);
        } else {
            backgroundLine.setAttribute("stroke", gray);
        }
        backgroundLine.setAttribute("class", "bg-line")
        backgroundLine.setAttribute("x1", "262");
        backgroundLine.setAttribute("y1", `${955 - (50 * i)}`);
        backgroundLine.setAttribute("x2", "1262");
        backgroundLine.setAttribute("y2", `${955 - (50 * i)}`);
        backgroundLine.setAttribute("stroke-width", "10");
        svg.appendChild(backgroundLine);
    }

    // Line 1 
    const line1 = document.createElementNS(namespace, "path");
    line1.setAttribute("id", "line1-" + type);
    line1.setAttribute("stroke", color1);
    line1.setAttribute("d", "M267 856L667.5 554.5L868.5 805L1267 504.5");
    line1.setAttribute("stroke-width", "12");
    svg.appendChild(line1);

    // Line 2
    const line2 = document.createElementNS(namespace, "path");
    line2.setAttribute("id", "line2-" + type);
    line2.setAttribute("stroke", color2);
    line2.setAttribute("d", "M266 558.5L615.5 854L817 405L1271 854");
    line2.setAttribute("stroke-width", "12");
    svg.appendChild(line2);

    // Line 3
    const line3 = document.createElementNS(namespace, "path");
    line3.setAttribute("id", "line3-" + type);
    line3.setAttribute("stroke", color3);
    line3.setAttribute("d", "M266 303L618 155L717.5 402.5L1067 206L1271 402.5");
    line3.setAttribute("stroke-width", "12");
    svg.appendChild(line3);

    // Line 4
    const line4 = document.createElementNS(namespace, "path");
    line4.setAttribute("id", "line4-" + type);
    line4.setAttribute("stroke", color4);
    line4.setAttribute("d", "M268.5 461.5L766 209L975 461.5L1268.5 308.5");
    line4.setAttribute("stroke-width", "12");
    svg.appendChild(line4);

    // Rect 1
    const rect1 = document.createElementNS(namespace, "rect");
    rect1.setAttribute("id", "rect1-" + type);
    rect1.setAttribute("fill", color1)
    rect1.setAttribute("y", "376");
    rect1.setAttribute("width", "85");
    rect1.setAttribute("height", "43");
    svg.appendChild(rect1)

    // Rect 2
    const rect2 = document.createElementNS(namespace, "rect");
    rect2.setAttribute("id", "rect2-" + type);
    rect2.setAttribute("fill", color2)
    rect2.setAttribute("y", "446");
    rect2.setAttribute("width", "85");
    rect2.setAttribute("height", "43");
    svg.appendChild(rect2);

    // Rect 3
    const rect3 = document.createElementNS(namespace, "rect");
    rect3.setAttribute("id", "rect3-" + type);
    rect3.setAttribute("fill", color3)
    rect3.setAttribute("y", "516");
    rect3.setAttribute("width", "85");
    rect3.setAttribute("height", "43");
    svg.appendChild(rect3);

    // Rect 4
    const rect4 = document.createElementNS(namespace, "rect");
    rect4.setAttribute("id", "rect4-" + type);
    rect4.setAttribute("fill", color4)
    rect4.setAttribute("y", "586");
    rect4.setAttribute("width", "85");
    rect4.setAttribute("height", "43");
    svg.appendChild(rect4);

    // Vertical Foreground Line
    const vForegroundLine = document.createElementNS(namespace, "line");
    if (darkModeEnabled) {
        vForegroundLine.setAttribute("stroke", white);
    } else {
        vForegroundLine.setAttribute("stroke", black);
    }
    vForegroundLine.setAttribute("class", "fg-line");
    vForegroundLine.setAttribute("x1", "262");
    vForegroundLine.setAttribute("y1", "1005");
    vForegroundLine.setAttribute("x2", "1272");
    vForegroundLine.setAttribute("y2", "1005");
    vForegroundLine.setAttribute("stroke-width", "10");
    svg.appendChild(vForegroundLine)

    // Horizontal Foreground Line
    const hForegroundLine = document.createElementNS(namespace, "line");
    if (darkModeEnabled) {
        hForegroundLine.setAttribute("stroke", white);
    } else {
        hForegroundLine.setAttribute("stroke", black);
    }
    hForegroundLine.setAttribute("class", "fg-line")
    hForegroundLine.setAttribute("x1", "267");
    hForegroundLine.setAttribute("y1", "-2.16393e-07");
    hForegroundLine.setAttribute("x2", "267");
    hForegroundLine.setAttribute("y2", "1010");
    hForegroundLine.setAttribute("stroke-width", "10");
    svg.appendChild(hForegroundLine);

    // Color 1 Label
    const color1Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color1Label.setAttribute("stroke", white);
        color1Label.setAttribute("fill", white);
    } else {
        color1Label.setAttribute("stroke", black);
        color1Label.setAttribute("fill", black);
    }
    color1Label.setAttribute("class", "fg-line")
    color1Label.setAttribute("d", "M116.912 383.568C118.235 383.568 119.344 383.739 120.24 384.08C121.157 384.421 122.085 384.976 123.024 385.744L121.36 387.696C120.016 386.608 118.597 386.064 117.104 386.064C115.269 386.064 113.787 386.768 112.656 388.176C111.547 389.584 110.992 391.845 110.992 394.96C110.992 397.989 111.547 400.229 112.656 401.68C113.765 403.109 115.237 403.824 117.072 403.824C118.011 403.824 118.832 403.664 119.536 403.344C120.24 403.024 120.987 402.576 121.776 402L123.28 403.92C122.597 404.624 121.723 405.211 120.656 405.68C119.589 406.149 118.363 406.384 116.976 406.384C115.184 406.384 113.584 405.947 112.176 405.072C110.789 404.176 109.701 402.875 108.912 401.168C108.144 399.44 107.76 397.371 107.76 394.96C107.76 392.549 108.165 390.491 108.976 388.784C109.787 387.056 110.885 385.755 112.272 384.88C113.659 384.005 115.205 383.568 116.912 383.568ZM132.657 388.752C135.025 388.752 136.86 389.541 138.161 391.12C139.484 392.699 140.145 394.843 140.145 397.552C140.145 399.301 139.847 400.848 139.249 402.192C138.652 403.515 137.788 404.549 136.657 405.296C135.527 406.021 134.183 406.384 132.625 406.384C130.257 406.384 128.412 405.595 127.089 404.016C125.767 402.437 125.105 400.293 125.105 397.584C125.105 395.835 125.404 394.299 126.001 392.976C126.599 391.632 127.463 390.597 128.593 389.872C129.724 389.125 131.079 388.752 132.657 388.752ZM132.657 391.12C129.735 391.12 128.273 393.275 128.273 397.584C128.273 401.872 129.724 404.016 132.625 404.016C135.527 404.016 136.977 401.861 136.977 397.552C136.977 393.264 135.537 391.12 132.657 391.12ZM152.337 388.752C152.934 388.752 153.489 388.816 154.001 388.944L153.457 391.824C152.945 391.696 152.454 391.632 151.985 391.632C150.939 391.632 150.097 392.016 149.457 392.784C148.817 393.552 148.315 394.747 147.953 396.368V406H145.009V389.136H147.537L147.825 392.56C148.273 391.301 148.881 390.352 149.649 389.712C150.417 389.072 151.313 388.752 152.337 388.752ZM173.117 384.592V406H170.173V387.728L165.181 390.768L163.901 388.688L170.525 384.592H173.117Z");
    svg.appendChild(color1Label);

    // Color 2 Label
    const color2Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color2Label.setAttribute("stroke", white);
        color2Label.setAttribute("fill", white);
    } else {
        color2Label.setAttribute("stroke", black);
        color2Label.setAttribute("fill", black);
    }
    color2Label.setAttribute("class", "fg-line")
    color2Label.setAttribute("d", "M116.912 453.568C118.235 453.568 119.344 453.739 120.24 454.08C121.157 454.421 122.085 454.976 123.024 455.744L121.36 457.696C120.016 456.608 118.597 456.064 117.104 456.064C115.269 456.064 113.787 456.768 112.656 458.176C111.547 459.584 110.992 461.845 110.992 464.96C110.992 467.989 111.547 470.229 112.656 471.68C113.765 473.109 115.237 473.824 117.072 473.824C118.011 473.824 118.832 473.664 119.536 473.344C120.24 473.024 120.987 472.576 121.776 472L123.28 473.92C122.597 474.624 121.723 475.211 120.656 475.68C119.589 476.149 118.363 476.384 116.976 476.384C115.184 476.384 113.584 475.947 112.176 475.072C110.789 474.176 109.701 472.875 108.912 471.168C108.144 469.44 107.76 467.371 107.76 464.96C107.76 462.549 108.165 460.491 108.976 458.784C109.787 457.056 110.885 455.755 112.272 454.88C113.659 454.005 115.205 453.568 116.912 453.568ZM132.657 458.752C135.025 458.752 136.86 459.541 138.161 461.12C139.484 462.699 140.145 464.843 140.145 467.552C140.145 469.301 139.847 470.848 139.249 472.192C138.652 473.515 137.788 474.549 136.657 475.296C135.527 476.021 134.183 476.384 132.625 476.384C130.257 476.384 128.412 475.595 127.089 474.016C125.767 472.437 125.105 470.293 125.105 467.584C125.105 465.835 125.404 464.299 126.001 462.976C126.599 461.632 127.463 460.597 128.593 459.872C129.724 459.125 131.079 458.752 132.657 458.752ZM132.657 461.12C129.735 461.12 128.273 463.275 128.273 467.584C128.273 471.872 129.724 474.016 132.625 474.016C135.527 474.016 136.977 471.861 136.977 467.552C136.977 463.264 135.537 461.12 132.657 461.12ZM152.337 458.752C152.934 458.752 153.489 458.816 154.001 458.944L153.457 461.824C152.945 461.696 152.454 461.632 151.985 461.632C150.939 461.632 150.097 462.016 149.457 462.784C148.817 463.552 148.315 464.747 147.953 466.368V476H145.009V459.136H147.537L147.825 462.56C148.273 461.301 148.881 460.352 149.649 459.712C150.417 459.072 151.313 458.752 152.337 458.752ZM170.077 454.272C171.357 454.272 172.477 454.528 173.437 455.04C174.419 455.552 175.176 456.256 175.709 457.152C176.243 458.027 176.509 459.019 176.509 460.128C176.509 461.429 176.211 462.677 175.613 463.872C175.037 465.067 174.141 466.357 172.925 467.744C171.709 469.131 169.864 471.061 167.389 473.536H177.021L176.669 476H164.029V473.664C166.888 470.699 168.915 468.533 170.109 467.168C171.304 465.781 172.157 464.576 172.669 463.552C173.181 462.528 173.437 461.429 173.437 460.256C173.437 459.147 173.117 458.283 172.477 457.664C171.837 457.024 170.984 456.704 169.917 456.704C169.043 456.704 168.275 456.885 167.613 457.248C166.952 457.611 166.248 458.208 165.501 459.04L163.581 457.504C164.456 456.416 165.427 455.605 166.493 455.072C167.56 454.539 168.755 454.272 170.077 454.272Z");
    svg.appendChild(color2Label);

    // Color 3 Label
    const color3Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color3Label.setAttribute("stroke", white);
        color3Label.setAttribute("fill", white);
    } else {
        color3Label.setAttribute("stroke", black);
        color3Label.setAttribute("fill", black);
    }
    color3Label.setAttribute("class", "fg-line")
    color3Label.setAttribute("d", "M116.912 523.568C118.235 523.568 119.344 523.739 120.24 524.08C121.157 524.421 122.085 524.976 123.024 525.744L121.36 527.696C120.016 526.608 118.597 526.064 117.104 526.064C115.269 526.064 113.787 526.768 112.656 528.176C111.547 529.584 110.992 531.845 110.992 534.96C110.992 537.989 111.547 540.229 112.656 541.68C113.765 543.109 115.237 543.824 117.072 543.824C118.011 543.824 118.832 543.664 119.536 543.344C120.24 543.024 120.987 542.576 121.776 542L123.28 543.92C122.597 544.624 121.723 545.211 120.656 545.68C119.589 546.149 118.363 546.384 116.976 546.384C115.184 546.384 113.584 545.947 112.176 545.072C110.789 544.176 109.701 542.875 108.912 541.168C108.144 539.44 107.76 537.371 107.76 534.96C107.76 532.549 108.165 530.491 108.976 528.784C109.787 527.056 110.885 525.755 112.272 524.88C113.659 524.005 115.205 523.568 116.912 523.568ZM132.657 528.752C135.025 528.752 136.86 529.541 138.161 531.12C139.484 532.699 140.145 534.843 140.145 537.552C140.145 539.301 139.847 540.848 139.249 542.192C138.652 543.515 137.788 544.549 136.657 545.296C135.527 546.021 134.183 546.384 132.625 546.384C130.257 546.384 128.412 545.595 127.089 544.016C125.767 542.437 125.105 540.293 125.105 537.584C125.105 535.835 125.404 534.299 126.001 532.976C126.599 531.632 127.463 530.597 128.593 529.872C129.724 529.125 131.079 528.752 132.657 528.752ZM132.657 531.12C129.735 531.12 128.273 533.275 128.273 537.584C128.273 541.872 129.724 544.016 132.625 544.016C135.527 544.016 136.977 541.861 136.977 537.552C136.977 533.264 135.537 531.12 132.657 531.12ZM152.337 528.752C152.934 528.752 153.489 528.816 154.001 528.944L153.457 531.824C152.945 531.696 152.454 531.632 151.985 531.632C150.939 531.632 150.097 532.016 149.457 532.784C148.817 533.552 148.315 534.747 147.953 536.368V546H145.009V529.136H147.537L147.825 532.56C148.273 531.301 148.881 530.352 149.649 529.712C150.417 529.072 151.313 528.752 152.337 528.752ZM169.981 524.272C171.304 524.272 172.435 524.517 173.373 525.008C174.333 525.499 175.059 526.16 175.549 526.992C176.061 527.824 176.317 528.731 176.317 529.712C176.317 531.013 175.933 532.091 175.165 532.944C174.419 533.776 173.416 534.341 172.157 534.64C173.587 534.768 174.749 535.28 175.645 536.176C176.541 537.072 176.989 538.288 176.989 539.824C176.989 541.061 176.691 542.181 176.093 543.184C175.496 544.187 174.643 544.976 173.533 545.552C172.424 546.107 171.144 546.384 169.693 546.384C168.392 546.384 167.197 546.149 166.109 545.68C165.021 545.189 164.072 544.464 163.261 543.504L165.021 541.872C165.725 542.597 166.44 543.131 167.165 543.472C167.912 543.813 168.723 543.984 169.597 543.984C170.941 543.984 171.997 543.611 172.765 542.864C173.533 542.096 173.917 541.072 173.917 539.792C173.917 538.384 173.555 537.392 172.829 536.816C172.104 536.24 171.048 535.952 169.661 535.952H168.061L168.413 533.68H169.501C170.611 533.68 171.528 533.349 172.253 532.688C173 532.027 173.373 531.099 173.373 529.904C173.373 528.901 173.053 528.112 172.413 527.536C171.773 526.939 170.909 526.64 169.821 526.64C168.989 526.64 168.221 526.789 167.517 527.088C166.835 527.387 166.131 527.877 165.405 528.56L163.869 526.8C165.683 525.115 167.72 524.272 169.981 524.272Z");
    svg.appendChild(color3Label);

    // Color 4 Label
    const color4Label = document.createElementNS(namespace, "path");
    if (darkModeEnabled) {
        color4Label.setAttribute("stroke", white);
        color4Label.setAttribute("fill", white);
    } else {
        color4Label.setAttribute("stroke", black);
        color4Label.setAttribute("fill", black);
    }
    color4Label.setAttribute("class", "fg-line")
    color4Label.setAttribute("d", "M116.912 593.568C118.235 593.568 119.344 593.739 120.24 594.08C121.157 594.421 122.085 594.976 123.024 595.744L121.36 597.696C120.016 596.608 118.597 596.064 117.104 596.064C115.269 596.064 113.787 596.768 112.656 598.176C111.547 599.584 110.992 601.845 110.992 604.96C110.992 607.989 111.547 610.229 112.656 611.68C113.765 613.109 115.237 613.824 117.072 613.824C118.011 613.824 118.832 613.664 119.536 613.344C120.24 613.024 120.987 612.576 121.776 612L123.28 613.92C122.597 614.624 121.723 615.211 120.656 615.68C119.589 616.149 118.363 616.384 116.976 616.384C115.184 616.384 113.584 615.947 112.176 615.072C110.789 614.176 109.701 612.875 108.912 611.168C108.144 609.44 107.76 607.371 107.76 604.96C107.76 602.549 108.165 600.491 108.976 598.784C109.787 597.056 110.885 595.755 112.272 594.88C113.659 594.005 115.205 593.568 116.912 593.568ZM132.657 598.752C135.025 598.752 136.86 599.541 138.161 601.12C139.484 602.699 140.145 604.843 140.145 607.552C140.145 609.301 139.847 610.848 139.249 612.192C138.652 613.515 137.788 614.549 136.657 615.296C135.527 616.021 134.183 616.384 132.625 616.384C130.257 616.384 128.412 615.595 127.089 614.016C125.767 612.437 125.105 610.293 125.105 607.584C125.105 605.835 125.404 604.299 126.001 602.976C126.599 601.632 127.463 600.597 128.593 599.872C129.724 599.125 131.079 598.752 132.657 598.752ZM132.657 601.12C129.735 601.12 128.273 603.275 128.273 607.584C128.273 611.872 129.724 614.016 132.625 614.016C135.527 614.016 136.977 611.861 136.977 607.552C136.977 603.264 135.537 601.12 132.657 601.12ZM152.337 598.752C152.934 598.752 153.489 598.816 154.001 598.944L153.457 601.824C152.945 601.696 152.454 601.632 151.985 601.632C150.939 601.632 150.097 602.016 149.457 602.784C148.817 603.552 148.315 604.747 147.953 606.368V616H145.009V599.136H147.537L147.825 602.56C148.273 601.301 148.881 600.352 149.649 599.712C150.417 599.072 151.313 598.752 152.337 598.752ZM178.845 608.384V610.72H176.061V616H173.213V610.72H164.061V608.608L170.493 594.272L172.957 595.296L167.165 608.384H173.245L173.501 602.624H176.061V608.384H178.845Z");
    svg.appendChild(color4Label);

    examples.appendChild(svg);
}