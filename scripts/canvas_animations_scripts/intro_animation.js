var lib,
    images,
    createjs;

(function (lib, img, cjs) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 800,
        height: 500,
        fps: 30,
        color: "#FFFFFF",
        manifest: []
    };

// stage content:
    (lib.BlackRussianIntro = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});

        // heatEscape
        this.instance = new lib.heatEscape();
        this.instance.setTransform(413, 379.3, 1, 1, 0, 0, 0, 386.3, 75.8);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(527).to({_off: false}, 0).wait(1).to({
            x: 412.7,
            alpha: 0.037
        }, 0).wait(1).to({x: 412.5, alpha: 0.074}, 0).wait(1).to({x: 412.3, alpha: 0.111}, 0).wait(1).to({
            x: 412.1,
            alpha: 0.148
        }, 0).wait(1).to({x: 411.9, alpha: 0.185}, 0).wait(1).to({
            x: 411.7,
            alpha: 0.222
        }, 0).wait(1).to({alpha: 0.259}, 0).wait(1).to({alpha: 0.296}, 0).wait(1).to({alpha: 0.333}, 0).wait(1).to({alpha: 0.37}, 0).wait(1).to({alpha: 0.407}, 0).wait(1).to({alpha: 0.444}, 0).wait(1).to({alpha: 0.481}, 0).wait(1).to({alpha: 0.519}, 0).wait(1).to({alpha: 0.556}, 0).wait(1).to({alpha: 0.593}, 0).wait(1).to({alpha: 0.63}, 0).wait(1).to({alpha: 0.667}, 0).wait(1).to({alpha: 0.704}, 0).wait(1).to({alpha: 0.741}, 0).wait(1).to({alpha: 0.778}, 0).wait(1).to({alpha: 0.815}, 0).wait(1).to({alpha: 0.852}, 0).wait(1).to({alpha: 0.889}, 0).wait(1).to({alpha: 0.926}, 0).wait(1).to({alpha: 0.963}, 0).wait(1).to({alpha: 1}, 0).wait(19).to({alpha: 0.963}, 0).wait(1).to({alpha: 0.926}, 0).wait(1).to({alpha: 0.889}, 0).wait(1).to({alpha: 0.852}, 0).wait(1).to({alpha: 0.815}, 0).wait(1).to({alpha: 0.778}, 0).wait(1).to({alpha: 0.741}, 0).wait(1).to({alpha: 0.704}, 0).wait(1).to({alpha: 0.667}, 0).wait(1).to({alpha: 0.63}, 0).wait(1).to({alpha: 0.593}, 0).wait(1).to({alpha: 0.556}, 0).wait(1).to({alpha: 0.519}, 0).wait(1).to({alpha: 0.481}, 0).wait(1).to({alpha: 0.444}, 0).wait(1).to({alpha: 0.407}, 0).wait(1).to({alpha: 0.37}, 0).wait(1).to({alpha: 0.333}, 0).wait(1).to({alpha: 0.296}, 0).wait(1).to({alpha: 0.259}, 0).wait(1).to({alpha: 0.222}, 0).wait(1).to({alpha: 0.185}, 0).wait(1).to({alpha: 0.148}, 0).wait(1).to({alpha: 0.111}, 0).wait(1).to({alpha: 0.074}, 0).wait(1).to({alpha: 0.037}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(56));

        // presents
        this.instance_1 = new lib.presents();
        this.instance_1.setTransform(427, 257.1, 1, 1, 0, 0, 0, 264.9, 61.1);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(467).to({_off: false}, 0).wait(1).to({alpha: 0.042}, 0).wait(1).to({alpha: 0.083}, 0).wait(1).to({alpha: 0.125}, 0).wait(1).to({alpha: 0.167}, 0).wait(1).to({alpha: 0.208}, 0).wait(1).to({alpha: 0.25}, 0).wait(1).to({alpha: 0.292}, 0).wait(1).to({alpha: 0.333}, 0).wait(1).to({alpha: 0.375}, 0).wait(1).to({alpha: 0.417}, 0).wait(1).to({alpha: 0.458}, 0).wait(1).to({alpha: 0.5}, 0).wait(1).to({alpha: 0.542}, 0).wait(1).to({alpha: 0.583}, 0).wait(1).to({alpha: 0.625}, 0).wait(1).to({alpha: 0.667}, 0).wait(1).to({alpha: 0.708}, 0).wait(1).to({alpha: 0.75}, 0).wait(1).to({alpha: 0.792}, 0).wait(1).to({alpha: 0.833}, 0).wait(1).to({alpha: 0.875}, 0).wait(1).to({alpha: 0.917}, 0).wait(1).to({alpha: 0.958}, 0).wait(1).to({alpha: 1}, 0).wait(12).to({alpha: 0.96}, 0).wait(1).to({alpha: 0.92}, 0).wait(1).to({alpha: 0.88}, 0).wait(1).to({alpha: 0.84}, 0).wait(1).to({alpha: 0.8}, 0).wait(1).to({alpha: 0.76}, 0).wait(1).to({alpha: 0.72}, 0).wait(1).to({alpha: 0.68}, 0).wait(1).to({alpha: 0.64}, 0).wait(1).to({alpha: 0.6}, 0).wait(1).to({alpha: 0.56}, 0).wait(1).to({alpha: 0.52}, 0).wait(1).to({alpha: 0.48}, 0).wait(1).to({alpha: 0.44}, 0).wait(1).to({alpha: 0.4}, 0).wait(1).to({alpha: 0.36}, 0).wait(1).to({alpha: 0.32}, 0).wait(1).to({alpha: 0.28}, 0).wait(1).to({alpha: 0.24}, 0).wait(1).to({alpha: 0.2}, 0).wait(1).to({alpha: 0.16}, 0).wait(1).to({alpha: 0.12}, 0).wait(1).to({alpha: 0.08}, 0).wait(1).to({alpha: 0.04}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(128));

        // 100teiPrji6
        this.instance_2 = new lib._100Tei();
        this.instance_2.setTransform(264.2, 353.8, 1, 1, 0, 0, 0, 231.2, 31.5);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off: false}, 0).wait(1).to({
            regX: 252.4,
            regY: 31.8,
            x: 285.4,
            y: 354.1,
            alpha: 0.019
        }, 0).wait(1).to({alpha: 0.038}, 0).wait(1).to({alpha: 0.057}, 0).wait(1).to({alpha: 0.075}, 0).wait(1).to({alpha: 0.094}, 0).wait(1).to({alpha: 0.113}, 0).wait(1).to({alpha: 0.132}, 0).wait(1).to({alpha: 0.151}, 0).wait(1).to({alpha: 0.17}, 0).wait(1).to({alpha: 0.189}, 0).wait(1).to({alpha: 0.208}, 0).wait(1).to({alpha: 0.226}, 0).wait(1).to({alpha: 0.245}, 0).wait(1).to({alpha: 0.264}, 0).wait(1).to({alpha: 0.283}, 0).wait(1).to({alpha: 0.302}, 0).wait(1).to({alpha: 0.321}, 0).wait(1).to({alpha: 0.34}, 0).wait(1).to({alpha: 0.358}, 0).wait(1).to({alpha: 0.377}, 0).wait(1).to({alpha: 0.396}, 0).wait(1).to({alpha: 0.415}, 0).wait(1).to({alpha: 0.434}, 0).wait(1).to({alpha: 0.453}, 0).wait(1).to({alpha: 0.472}, 0).wait(1).to({alpha: 0.491}, 0).wait(1).to({alpha: 0.509}, 0).wait(1).to({alpha: 0.528}, 0).wait(1).to({alpha: 0.547}, 0).wait(1).to({alpha: 0.566}, 0).wait(1).to({alpha: 0.585}, 0).wait(1).to({alpha: 0.604}, 0).wait(1).to({alpha: 0.623}, 0).wait(1).to({alpha: 0.642}, 0).wait(1).to({alpha: 0.66}, 0).wait(1).to({alpha: 0.679}, 0).wait(1).to({alpha: 0.698}, 0).wait(1).to({alpha: 0.717}, 0).wait(1).to({alpha: 0.736}, 0).wait(1).to({alpha: 0.755}, 0).wait(1).to({alpha: 0.774}, 0).wait(1).to({alpha: 0.792}, 0).wait(1).to({alpha: 0.811}, 0).wait(1).to({alpha: 0.83}, 0).wait(1).to({alpha: 0.849}, 0).wait(1).to({alpha: 0.868}, 0).wait(1).to({alpha: 0.887}, 0).wait(1).to({alpha: 0.906}, 0).wait(1).to({alpha: 0.925}, 0).wait(1).to({alpha: 0.943}, 0).wait(1).to({alpha: 0.962}, 0).wait(1).to({alpha: 0.981}, 0).wait(1).to({alpha: 1}, 0).wait(2).to({alpha: 0.999}, 0).wait(3).to({alpha: 0.998}, 0).wait(3).to({alpha: 0.997}, 0).wait(3).to({alpha: 0.996}, 0).wait(3).to({alpha: 0.995}, 0).wait(2).to({alpha: 0.994}, 0).wait(3).to({alpha: 0.993}, 0).wait(3).to({alpha: 0.992}, 0).wait(3).to({alpha: 0.991}, 0).wait(3).to({alpha: 0.99}, 0).wait(2).to({alpha: 0.957}, 0).wait(1).to({alpha: 0.924}, 0).wait(1).to({alpha: 0.891}, 0).wait(1).to({alpha: 0.858}, 0).wait(1).to({alpha: 0.825}, 0).wait(1).to({alpha: 0.792}, 0).wait(1).to({alpha: 0.759}, 0).wait(1).to({alpha: 0.726}, 0).wait(1).to({alpha: 0.693}, 0).wait(1).to({alpha: 0.66}, 0).wait(1).to({alpha: 0.627}, 0).wait(1).to({alpha: 0.594}, 0).wait(1).to({alpha: 0.561}, 0).wait(1).to({alpha: 0.528}, 0).wait(1).to({alpha: 0.495}, 0).wait(1).to({alpha: 0.462}, 0).wait(1).to({alpha: 0.429}, 0).wait(1).to({alpha: 0.396}, 0).wait(1).to({alpha: 0.363}, 0).wait(1).to({alpha: 0.33}, 0).wait(1).to({alpha: 0.297}, 0).wait(1).to({alpha: 0.264}, 0).wait(1).to({alpha: 0.231}, 0).wait(1).to({alpha: 0.198}, 0).wait(1).to({alpha: 0.165}, 0).wait(1).to({alpha: 0.132}, 0).wait(1).to({alpha: 0.099}, 0).wait(1).to({alpha: 0.066}, 0).wait(1).to({alpha: 0.033}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(382));

        // blackRussianEntertinment
        this.text = new cjs.Text("BLACK RUSSIAN ENTERTAINMENT", "60px 'IceCream'");
        this.text.lineHeight = 62;
        this.text.lineWidth = 757;
        this.text.setTransform(26.4, -81.7);
        this.text._off = true;

        this.timeline.addTween(cjs.Tween.get(this.text).wait(406).to({_off: false}, 0).wait(1).to({
            x: 26.3,
            y: -71.3
        }, 0).wait(1).to({y: -60.8}, 0).wait(1).to({y: -50.3}, 0).wait(1).to({y: -39.8}, 0).wait(1).to({y: -29.4}, 0).wait(1).to({y: -18.9}, 0).wait(1).to({y: -8.4}, 0).wait(1).to({y: 2.1}, 0).wait(1).to({y: 12.6}, 0).wait(1).to({y: 23}, 0).wait(1).to({y: 33.5}, 0).wait(1).to({y: 44}, 0).wait(1).to({y: 54.5}, 0).wait(1).to({y: 65}, 0).wait(1).to({y: 75.4}, 0).wait(1).to({y: 85.9}, 0).wait(1).to({y: 96.4}, 0).wait(1).to({
            x: 26.2,
            y: 106.9
        }, 0).wait(1).to({y: 117.3}, 0).wait(1).to({y: 127.8}, 0).wait(1).to({y: 138.3}, 0).wait(1).to({y: 148.8}, 0).wait(1).to({y: 159.3}, 0).wait(1).to({y: 169.7}, 0).wait(1).to({y: 180.2}, 0).wait(1).to({y: 190.7}, 0).wait(1).to({y: 201.2}, 0).wait(1).to({y: 211.7}, 0).wait(1).to({y: 222.1}, 0).wait(1).to({y: 232.6}, 0).wait(1).to({y: 243.1}, 0).wait(1).to({y: 253.6}, 0).wait(1).to({y: 264}, 0).wait(1).to({y: 274.5}, 0).wait(1).to({
            x: 26.1,
            y: 285
        }, 0).wait(1).to({y: 295.5}, 0).wait(1).to({y: 306}, 0).wait(1).to({y: 316.4}, 0).wait(1).to({y: 326.9}, 0).wait(1).to({y: 337.4}, 0).wait(1).to({y: 347.9}, 0).wait(1).to({y: 358.4}, 0).wait(1).to({y: 368.8}, 0).wait(1).to({y: 379.3}, 0).wait(1).to({y: 389.8}, 0).wait(1).to({y: 400.3}, 0).wait(1).to({y: 410.7}, 0).wait(1).to({y: 421.2}, 0).wait(1).to({y: 431.7}, 0).wait(1).to({y: 442.2}, 0).wait(1).to({y: 452.7}, 0).wait(1).to({y: 463.1}, 0).wait(1).to({
            x: 26,
            y: 473.6
        }, 0).wait(1).to({y: 484.1}, 0).wait(1).to({y: 494.6}, 0).wait(1).to({y: 505.1}, 0).wait(1).to({y: 515.5}, 0).wait(1).to({y: 526}, 0).wait(1).to({y: 536.5}, 0).wait(1).to({y: 547}, 0).wait(1).to({y: 557.5}, 0).to({_off: true}, 1).wait(188));

        // tears
        this.instance_3 = new lib.tears();
        this.instance_3.setTransform(245.4, 310.4, 1, 1, 0, 0, 0, 73.8, 147.3);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off: false}, 0).wait(1).to({
            x: 245.8,
            y: 317.8,
            alpha: 0.067
        }, 0).wait(1).to({x: 246.2, y: 325.3, alpha: 0.133}, 0).wait(1).to({
            x: 246.6,
            y: 332.7,
            alpha: 0.2
        }, 0).wait(1).to({x: 247, y: 340.1, alpha: 0.267}, 0).wait(1).to({
            x: 247.4,
            y: 347.6,
            alpha: 0.333
        }, 0).wait(1).to({x: 247.8, y: 355, alpha: 0.4}, 0).wait(1).to({
            x: 248.2,
            y: 362.4,
            alpha: 0.467
        }, 0).wait(1).to({x: 248.6, y: 369.9, alpha: 0.533}, 0).wait(1).to({
            x: 249.1,
            y: 377.3,
            alpha: 0.6
        }, 0).wait(1).to({x: 249.5, y: 384.7, alpha: 0.667}, 0).wait(1).to({
            x: 249.9,
            y: 392.2,
            alpha: 0.733
        }, 0).wait(1).to({x: 250.3, y: 399.6, alpha: 0.8}, 0).wait(1).to({
            x: 250.7,
            y: 407,
            alpha: 0.867
        }, 0).wait(1).to({x: 251.1, y: 414.5, alpha: 0.933}, 0).wait(1).to({
            x: 251.5,
            y: 421.9,
            alpha: 1
        }, 0).wait(1).to({x: 251.9, y: 429.3}, 0).wait(1).to({x: 252.3, y: 436.8}, 0).wait(1).to({
            x: 252.8,
            y: 444.2
        }, 0).wait(1).to({x: 253.2, y: 451.6}, 0).wait(1).to({x: 253.6, y: 459.1}, 0).wait(1).to({
            x: 254,
            y: 466.5
        }, 0).wait(1).to({x: 254.4, y: 473.9}, 0).wait(1).to({x: 254.8, y: 481.4}, 0).wait(1).to({
            x: 255.2,
            y: 488.8
        }, 0).wait(1).to({x: 255.6, y: 496.2}, 0).wait(1).to({x: 256.1, y: 503.7}, 0).wait(1).to({
            x: 256.5,
            y: 511.1
        }, 0).wait(1).to({x: 256.9, y: 518.5}, 0).wait(1).to({x: 257.3, y: 525.9}, 0).wait(1).to({
            x: 257.7,
            y: 533.4
        }, 0).wait(1).to({x: 258.1, y: 540.8}, 0).wait(1).to({x: 258.5, y: 548.2}, 0).wait(1).to({
            x: 258.9,
            y: 555.7
        }, 0).wait(1).to({x: 259.3, y: 563.1}, 0).wait(1).to({x: 259.8, y: 570.5}, 0).wait(1).to({
            x: 260.2,
            y: 578
        }, 0).wait(1).to({x: 260.6, y: 585.4}, 0).wait(1).to({x: 261, y: 592.8}, 0).wait(1).to({
            x: 261.4,
            y: 600.3
        }, 0).wait(1).to({x: 261.8, y: 607.7}, 0).wait(1).to({x: 262.2, y: 615.1}, 0).wait(1).to({
            x: 262.6,
            y: 622.6
        }, 0).wait(1).to({x: 263, y: 630}, 0).wait(1).to({x: 263.5, y: 637.4}, 0).wait(1).to({
            x: 263.9,
            y: 644.9
        }, 0).wait(1).to({x: 264.3, y: 652.3}, 0).wait(1).to({x: 264.7, y: 659.7}, 0).wait(1).to({
            x: 265.1,
            y: 667.2
        }, 0).wait(1).to({x: 265.5, y: 674.6}, 0).wait(1).to({x: 265.9, y: 682}, 0).wait(1).to({
            x: 266.3,
            y: 689.5
        }, 0).wait(1).to({
            x: 266.8,
            y: 696.9
        }, 0).wait(1).to({y: 699.2}, 0).wait(1).to({y: 701.5}, 0).wait(1).to({y: 703.9}, 0).wait(1).to({y: 706.2}, 0).to({_off: true}, 1).wait(437));

        // head
        this.instance_4 = new lib.Symbol3();
        this.instance_4.setTransform(229.3, 137.9, 1, 1, 0, 0, 0, 111.3, 120.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation: 0.3}, 0).wait(1).to({rotation: 0.6}, 0).wait(1).to({rotation: 0.9}, 0).wait(1).to({rotation: 1.1}, 0).wait(1).to({
            rotation: 1.4,
            x: 229.2
        }, 0).wait(1).to({
            rotation: 1.7,
            x: 229.3
        }, 0).wait(1).to({rotation: 2}, 0).wait(1).to({rotation: 2.3}, 0).wait(1).to({
            rotation: 2.6,
            x: 229.2
        }, 0).wait(1).to({rotation: 2.9}, 0).wait(1).to({rotation: 3.1}, 0).wait(1).to({rotation: 3.4}, 0).wait(1).to({rotation: 3.7}, 0).wait(1).to({
            rotation: 4,
            x: 229.3
        }, 0).wait(1).to({
            rotation: 4.3,
            x: 229.2
        }, 0).wait(1).to({rotation: 4.6}, 0).wait(1).to({rotation: 4.9}, 0).wait(1).to({rotation: 5.1}, 0).wait(1).to({rotation: 5.4}, 0).wait(1).to({rotation: 5.7}, 0).wait(1).to({rotation: 5.2}, 0).wait(1).to({
            rotation: 4.6,
            x: 229.3
        }, 0).wait(1).to({
            rotation: 4.1,
            x: 229.2
        }, 0).wait(1).to({rotation: 3.5}, 0).wait(1).to({rotation: 3}, 0).wait(1).to({rotation: 2.4}, 0).wait(1).to({
            rotation: 1.9,
            x: 229.3
        }, 0).wait(1).to({rotation: 1.3, x: 229.2}, 0).wait(1).to({
            rotation: 0.8,
            x: 229.3
        }, 0).wait(1).to({rotation: 0.2}, 0).wait(1).to({rotation: -0.3}, 0).wait(1).to({rotation: -0.9}, 0).wait(1).to({
            rotation: -1.4,
            x: 229.2
        }, 0).wait(1).to({rotation: -1.9, x: 229.3}, 0).wait(1).to({
            rotation: -2.5,
            x: 229.2
        }, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -3.6}, 0).wait(1).to({
            rotation: -4.1,
            x: 229.3
        }, 0).wait(1).to({rotation: -4.7}, 0).wait(1).to({rotation: -3.9}, 0).wait(1).to({
            rotation: -3.1,
            x: 229.2
        }, 0).wait(1).to({rotation: -2.3, x: 229.3}, 0).wait(1).to({
            rotation: -1.5,
            x: 229.2
        }, 0).wait(1).to({rotation: -0.7}, 0).wait(1).to({
            rotation: 0.1,
            x: 229.3
        }, 0).wait(1).to({rotation: 0.9}, 0).wait(1).to({rotation: 1.7, x: 229.2}, 0).wait(1).to({
            rotation: 2.5,
            x: 229.3
        }, 0).wait(1).to({rotation: 3.3, x: 229.2}, 0).wait(1).to({
            rotation: 4.1,
            x: 229.3
        }, 0).wait(1).to({rotation: 4.9}, 0).wait(1).to({rotation: 5.7, x: 229.2}, 0).wait(1).to({
            rotation: 6.5,
            x: 229.3
        }, 0).wait(1).to({
            rotation: 7.3,
            x: 229.2
        }, 0).wait(1).to({rotation: 8.1}, 0).wait(1).to({rotation: 8.9}, 0).wait(1).to({rotation: 9.7}, 0).wait(1).to({rotation: 9}, 0).wait(1).to({rotation: 8.4}, 0).wait(1).to({
            rotation: 7.7,
            x: 229.3
        }, 0).wait(1).to({rotation: 7.1, x: 229.2}, 0).wait(1).to({
            rotation: 6.4,
            x: 229.3
        }, 0).wait(1).to({rotation: 5.7, x: 229.2}, 0).wait(1).to({rotation: 5.1}, 0).wait(1).to({
            rotation: 4.4,
            x: 229.3
        }, 0).wait(1).to({rotation: 3.8, x: 229.2}, 0).wait(1).to({
            rotation: 3.1,
            x: 229.3
        }, 0).wait(1).to({rotation: 2.5}, 0).wait(1).to({rotation: 1.8, x: 229.2}, 0).wait(1).to({
            rotation: 1.1,
            x: 229.3
        }, 0).wait(1).to({rotation: 0.5}, 0).wait(1).to({rotation: -0.2, x: 229.2}, 0).wait(1).to({
            rotation: -0.8,
            x: 229.3
        }, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -2.1, x: 229.2}, 0).wait(1).to({
            rotation: -1.7,
            x: 229.3
        }, 0).wait(1).to({rotation: -1.3, x: 229.2}, 0).wait(1).to({
            rotation: -0.8,
            x: 229.3
        }, 0).wait(1).to({rotation: -0.4, x: 229.2}, 0).wait(1).to({rotation: 0.1}, 0).wait(1).to({
            rotation: 0.5,
            x: 229.3
        }, 0).wait(1).to({rotation: 1}, 0).wait(1).to({
            rotation: 1.4,
            x: 229.2
        }, 0).wait(1).to({rotation: 1.9}, 0).wait(1).to({rotation: 2.3}, 0).wait(1).to({rotation: 2.8}, 0).wait(1).to({
            rotation: 3.2,
            x: 229.3
        }, 0).wait(1).to({rotation: 3.7, x: 229.2}, 0).wait(1).to({rotation: 4.1}, 0).wait(1).to({
            rotation: 4.5,
            x: 229.3
        }, 0).wait(1).to({rotation: 5}, 0).wait(1).to({
            rotation: 5.4,
            x: 229.2
        }, 0).wait(1).to({rotation: 5.9}, 0).wait(1).to({rotation: 6.3}, 0).wait(1).to({rotation: 6.8}, 0).wait(1).to({rotation: 7.2}, 0).wait(5).to({x: 229.3}, 0).wait(4).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(2).to({rotation: 7.1}, 0).wait(1).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(1).to({y: 138}, 0).wait(1).to({
            x: 229.2,
            y: 137.9
        }, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({rotation: 7}, 0).wait(13).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({
            rotation: 6.9,
            x: 229.3
        }, 0).wait(3).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({
            rotation: 6.8,
            x: 229.2
        }, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(8).to({x: 229.3}, 0).wait(1).to({rotation: 6.7}, 0).wait(2).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(1).to({rotation: 6.6}, 0).wait(2).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(6).to({rotation: 6.5}, 0).wait(3).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({
            rotation: 6.4,
            x: 229.3
        }, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({rotation: 6.3}, 0).wait(7).to({x: 229.3}, 0).wait(5).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(3).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(1).to({rotation: 6.2}, 0).wait(1).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(1).to({rotation: 6.1}, 0).wait(13).to({x: 229.3}, 0).wait(4).to({
            rotation: 6,
            y: 138
        }, 0).wait(1).to({y: 137.9}, 0).wait(3).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(2).to({x: 229.2}, 0).wait(2).to({
            rotation: 5.9,
            x: 229.3
        }, 0).wait(2).to({x: 229.2}, 0).wait(2).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(3).to({x: 229.3}, 0).wait(1).to({x: 229.2}, 0).wait(8).to({rotation: 5.8}, 0).wait(5).to({x: 229.3}, 0).wait(6).to({x: 229.2}, 0).wait(1).to({x: 229.3}, 0).wait(2).to({
            rotation: 8.7,
            x: 229.2,
            y: 147.7,
            alpha: 0.991
        }, 0).wait(1).to({rotation: 11.7, y: 157.5, alpha: 0.982}, 0).wait(1).to({
            rotation: 14.6,
            y: 167.3,
            alpha: 0.973
        }, 0).wait(1).to({rotation: 17.6, x: 229.1, y: 177.1, alpha: 0.964}, 0).wait(1).to({
            rotation: 20.6,
            x: 229,
            y: 186.9,
            alpha: 0.955
        }, 0).wait(1).to({rotation: 23.5, y: 196.7, alpha: 0.946}, 0).wait(1).to({
            rotation: 26.5,
            y: 206.5,
            alpha: 0.936
        }, 0).wait(1).to({rotation: 29.4, y: 216.2, alpha: 0.927}, 0).wait(1).to({
            rotation: 32.4,
            x: 228.9,
            y: 226.1,
            alpha: 0.918
        }, 0).wait(1).to({rotation: 35.3, y: 235.9, alpha: 0.909}, 0).wait(1).to({
            rotation: 38.3,
            y: 245.7,
            alpha: 0.9
        }, 0).wait(1).to({rotation: 41.2, x: 228.8, y: 255.5, alpha: 0.891}, 0).wait(1).to({
            rotation: 44.2,
            y: 265.2,
            alpha: 0.882
        }, 0).wait(1).to({rotation: 47.2, y: 275, alpha: 0.873}, 0).wait(1).to({
            rotation: 50.1,
            x: 228.7,
            y: 284.9,
            alpha: 0.864
        }, 0).wait(1).to({rotation: 53.1, y: 294.6, alpha: 0.855}, 0).wait(1).to({
            rotation: 56,
            x: 228.6,
            y: 304.4,
            alpha: 0.846
        }, 0).wait(1).to({rotation: 59, y: 314.2, alpha: 0.837}, 0).wait(1).to({
            rotation: 61.9,
            x: 228.5,
            y: 324,
            alpha: 0.828
        }, 0).wait(1).to({rotation: 64.9, y: 333.8, alpha: 0.819}, 0).wait(1).to({
            rotation: 67.8,
            y: 343.6,
            alpha: 0.809
        }, 0).wait(1).to({rotation: 70.8, x: 228.4, y: 353.4, alpha: 0.8}, 0).wait(1).to({
            rotation: 73.8,
            x: 228.5,
            y: 363.2,
            alpha: 0.791
        }, 0).wait(1).to({rotation: 76.7, x: 228.4, y: 373, alpha: 0.782}, 0).wait(1).to({
            rotation: 79.7,
            x: 228.3,
            y: 382.8,
            alpha: 0.773
        }, 0).wait(1).to({rotation: 82.6, y: 392.6, alpha: 0.764}, 0).wait(1).to({
            rotation: 85.6,
            x: 228.2,
            y: 402.3,
            alpha: 0.755
        }, 0).wait(1).to({rotation: 88.5, x: 228.3, y: 412.2, alpha: 0.746}, 0).wait(1).to({
            rotation: 91.5,
            x: 228.2,
            y: 422,
            alpha: 0.737
        }, 0).wait(1).to({rotation: 94.4, x: 228.1, y: 431.7, alpha: 0.728}, 0).wait(1).to({
            rotation: 97.4,
            y: 441.5,
            alpha: 0.719
        }, 0).wait(1).to({rotation: 100.4, y: 451.4, alpha: 0.71}, 0).wait(1).to({
            rotation: 103.3,
            y: 461.1,
            alpha: 0.701
        }, 0).wait(1).to({rotation: 106.3, x: 228, y: 470.9, alpha: 0.691}, 0).wait(1).to({
            rotation: 109.2,
            y: 480.7,
            alpha: 0.682
        }, 0).wait(1).to({rotation: 112.2, x: 227.9, y: 490.5, alpha: 0.673}, 0).wait(1).to({
            rotation: 115.1,
            y: 500.3,
            alpha: 0.664
        }, 0).wait(1).to({rotation: 118.1, y: 510.1, alpha: 0.655}, 0).wait(1).to({
            rotation: 121.1,
            y: 519.9,
            alpha: 0.646
        }, 0).wait(1).to({rotation: 124, y: 529.7, alpha: 0.637}, 0).wait(1).to({
            rotation: 127,
            x: 227.8,
            y: 539.5,
            alpha: 0.628
        }, 0).wait(1).to({rotation: 129.9, y: 549.2, alpha: 0.619}, 0).wait(1).to({
            rotation: 132.9,
            x: 227.7,
            y: 559.1,
            alpha: 0.61
        }, 0).wait(1).to({rotation: 135.8, y: 568.9, alpha: 0.601}, 0).wait(1).to({
            rotation: 123.5,
            y: 578.6,
            alpha: 0.592
        }, 0).wait(1).to({rotation: 111.1, x: 227.6, y: 588.5, alpha: 0.583}, 0).wait(1).to({
            rotation: 98.8,
            y: 598.3,
            alpha: 0.574
        }, 0).wait(1).to({rotation: 86.4, y: 608.1, alpha: 0.564}, 0).wait(1).to({
            rotation: 74,
            x: 227.5,
            y: 617.9,
            alpha: 0.555
        }, 0).wait(1).to({rotation: 61.7, x: 227.6, y: 627.6, alpha: 0.546}, 0).wait(1).to({
            rotation: 49.3,
            x: 227.5,
            y: 637.5,
            alpha: 0.537
        }, 0).wait(1).to({rotation: 37, y: 647.2, alpha: 0.528}, 0).wait(1).to({
            rotation: 24.6,
            y: 657.1,
            alpha: 0.519
        }, 0).wait(1).to({rotation: 12.2, y: 666.9, alpha: 0.51}, 0).to({_off: true}, 1).wait(252));

        // iceCibes
        this.instance_5 = new lib.iseCUbesHand();
        this.instance_5.setTransform(602.8, 411.3, 1, 1, 0, 0, 0, 16.9, 45.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({
            regY: 45.7,
            y: 411.2
        }, 0).wait(114).to({x: 603.5, y: 411.8}, 0).wait(1).to({x: 604.2, y: 412.5}, 0).wait(1).to({
            x: 604.9,
            y: 413.1
        }, 0).wait(1).to({x: 605.6, y: 413.8}, 0).wait(1).to({x: 606.3, y: 414.5}, 0).wait(1).to({
            x: 607,
            y: 415.1
        }, 0).wait(1).to({x: 607.7, y: 415.8}, 0).wait(1).to({x: 608.4, y: 416.5}, 0).wait(1).to({
            x: 609.1,
            y: 417.2
        }, 0).wait(1).to({x: 608.1, y: 412}, 0).wait(1).to({x: 607.2, y: 406.9}, 0).wait(1).to({
            x: 606.2,
            y: 401.8
        }, 0).wait(1).to({x: 605.3, y: 396.7}, 0).wait(1).to({x: 605.9, y: 403.4}, 0).wait(1).to({
            x: 606.6,
            y: 410.2
        }, 0).wait(1).to({x: 607.2, y: 417}, 0).wait(1).to({x: 607.9, y: 423.8}, 0).wait(1).to({
            x: 608,
            y: 429.6
        }, 0).wait(1).to({y: 435.4}, 0).wait(1).to({y: 441.2}, 0).wait(1).to({
            x: 608.1,
            y: 447
        }, 0).wait(1).to({y: 452.8}, 0).wait(1).to({
            x: 608.2,
            y: 458.5
        }, 0).wait(1).to({y: 464.3}, 0).wait(1).to({y: 470.1}, 0).wait(1).to({
            x: 608.3,
            y: 475.9
        }, 0).wait(1).to({y: 481.7}, 0).wait(1).to({
            x: 608.4,
            y: 487.5
        }, 0).wait(1).to({y: 493.2}, 0).wait(1).to({y: 499}, 0).wait(1).to({
            x: 608.5,
            y: 504.8
        }, 0).wait(1).to({y: 510.6}, 0).wait(1).to({
            x: 608.6,
            y: 516.4
        }, 0).wait(1).to({y: 522.2}, 0).wait(1).to({y: 528}, 0).wait(1).to({
            x: 608.7,
            y: 533.7
        }, 0).wait(1).to({y: 539.5}, 0).wait(1).to({
            x: 608.8,
            y: 545.3
        }, 0).wait(1).to({y: 551.1}, 0).wait(1).to({y: 556.9}, 0).wait(1).to({
            x: 608.9,
            y: 562.7
        }, 0).wait(1).to({y: 568.4}, 0).wait(1).to({
            x: 609,
            y: 574.2
        }, 0).wait(1).to({y: 580}, 0).wait(1).to({y: 585.8}, 0).wait(1).to({
            x: 609.1,
            y: 591.6
        }, 0).wait(1).to({y: 597.4}, 0).wait(1).to({x: 609.2, y: 603.2}, 0).to({_off: true}, 1).wait(493));

        // hand
        this.instance_6 = new lib.hand();
        this.instance_6.setTransform(592.7, 418.1, 1, 1, 0, 0, 0, 56.5, 46.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({
            regY: 46.5,
            y: 418
        }, 0).wait(312).to({alpha: 0.97}, 0).wait(1).to({alpha: 0.939}, 0).wait(1).to({alpha: 0.909}, 0).wait(1).to({alpha: 0.879}, 0).wait(1).to({alpha: 0.848}, 0).wait(1).to({alpha: 0.818}, 0).wait(1).to({alpha: 0.788}, 0).wait(1).to({alpha: 0.758}, 0).wait(1).to({alpha: 0.727}, 0).wait(1).to({alpha: 0.697}, 0).wait(1).to({alpha: 0.667}, 0).wait(1).to({alpha: 0.636}, 0).wait(1).to({alpha: 0.606}, 0).wait(1).to({alpha: 0.576}, 0).wait(1).to({alpha: 0.545}, 0).wait(1).to({alpha: 0.515}, 0).wait(1).to({alpha: 0.485}, 0).wait(1).to({alpha: 0.455}, 0).wait(1).to({alpha: 0.424}, 0).wait(1).to({alpha: 0.394}, 0).wait(1).to({alpha: 0.364}, 0).wait(1).to({alpha: 0.333}, 0).wait(1).to({alpha: 0.303}, 0).wait(1).to({alpha: 0.273}, 0).wait(1).to({alpha: 0.242}, 0).wait(1).to({alpha: 0.212}, 0).wait(1).to({alpha: 0.182}, 0).wait(1).to({alpha: 0.152}, 0).wait(1).to({alpha: 0.121}, 0).wait(1).to({alpha: 0.091}, 0).wait(1).to({alpha: 0.061}, 0).wait(1).to({alpha: 0.03}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(310));

        // torso
        this.instance_7 = new lib.tors();
        this.instance_7.setTransform(314.1, 393.2, 0.999, 0.999, 20.6, 0, 0, 246.5, 167);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({
            regX: 246.8,
            scaleX: 1,
            scaleY: 1,
            rotation: 20.7,
            x: 314.4,
            y: 393.3
        }, 0).wait(272).to({alpha: 0.975}, 0).wait(1).to({alpha: 0.95}, 0).wait(1).to({alpha: 0.925}, 0).wait(1).to({alpha: 0.9}, 0).wait(1).to({alpha: 0.875}, 0).wait(1).to({alpha: 0.85}, 0).wait(1).to({alpha: 0.825}, 0).wait(1).to({alpha: 0.8}, 0).wait(1).to({alpha: 0.775}, 0).wait(1).to({alpha: 0.75}, 0).wait(1).to({alpha: 0.725}, 0).wait(1).to({alpha: 0.7}, 0).wait(1).to({alpha: 0.675}, 0).wait(1).to({alpha: 0.65}, 0).wait(1).to({alpha: 0.625}, 0).wait(1).to({alpha: 0.6}, 0).wait(1).to({alpha: 0.575}, 0).wait(1).to({alpha: 0.55}, 0).wait(1).to({alpha: 0.525}, 0).wait(1).to({alpha: 0.5}, 0).wait(1).to({alpha: 0.475}, 0).wait(1).to({alpha: 0.45}, 0).wait(1).to({alpha: 0.425}, 0).wait(1).to({alpha: 0.4}, 0).wait(1).to({alpha: 0.375}, 0).wait(1).to({alpha: 0.35}, 0).wait(1).to({alpha: 0.325}, 0).wait(1).to({alpha: 0.3}, 0).wait(1).to({alpha: 0.275}, 0).wait(1).to({alpha: 0.25}, 0).wait(1).to({alpha: 0.225}, 0).wait(1).to({alpha: 0.2}, 0).wait(1).to({alpha: 0.175}, 0).wait(1).to({alpha: 0.15}, 0).wait(1).to({alpha: 0.125}, 0).wait(1).to({alpha: 0.1}, 0).wait(1).to({alpha: 0.075}, 0).wait(1).to({alpha: 0.05}, 0).wait(1).to({alpha: 0.025}, 0).wait(1).to({alpha: 0}, 0).to({_off: true}, 1).wait(343));

        // cloud
        this.instance_8 = new lib.cloud();
        this.instance_8.setTransform(582.3, 130.5, 0.696, 0.696, 23.3, 0, 0, 292.4, 162.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({
            scaleX: 0.7,
            scaleY: 0.7,
            rotation: 23.4,
            x: 582.6
        }, 0).wait(1).to({x: 582.8, y: 130.4}, 0).wait(1).to({
            x: 583.1,
            y: 130.3
        }, 0).wait(1).to({x: 583.4}, 0).wait(1).to({x: 583.6, y: 130.2}, 0).wait(1).to({
            x: 583.9,
            y: 130.1
        }, 0).wait(1).to({x: 584.1, y: 130}, 0).wait(1).to({
            x: 584.4,
            y: 129.9
        }, 0).wait(1).to({x: 584.7}, 0).wait(1).to({x: 584.9, y: 129.8}, 0).wait(1).to({
            x: 585.2,
            y: 129.7
        }, 0).wait(1).to({x: 585.5, y: 129.6}, 0).wait(1).to({x: 585.7}, 0).wait(1).to({
            x: 586,
            y: 129.5
        }, 0).wait(1).to({x: 586.3, y: 129.4}, 0).wait(1).to({x: 586.5, y: 129.3}, 0).wait(1).to({
            x: 586.8,
            y: 129.2
        }, 0).wait(1).to({x: 587.1}, 0).wait(1).to({x: 587.3, y: 129.1}, 0).wait(1).to({
            x: 587.6,
            y: 129
        }, 0).wait(1).to({x: 587.8, y: 128.9}, 0).wait(1).to({
            x: 588.1,
            y: 128.8
        }, 0).wait(1).to({x: 588.4}, 0).wait(1).to({x: 588.6, y: 128.7}, 0).wait(1).to({
            x: 588.9,
            y: 128.6
        }, 0).wait(1).to({x: 589.2, y: 128.5}, 0).wait(1).to({
            x: 589.4,
            y: 128.4
        }, 0).wait(1).to({x: 589.7}, 0).wait(1).to({x: 590, y: 128.3}, 0).wait(1).to({
            x: 590.2,
            y: 128.2
        }, 0).wait(1).to({x: 590.5, y: 128.1}, 0).wait(1).to({
            x: 590.8,
            y: 128
        }, 0).wait(1).to({x: 591}, 0).wait(1).to({x: 591.3, y: 127.9}, 0).wait(1).to({
            x: 591.6,
            y: 127.8
        }, 0).wait(1).to({x: 591.8, y: 127.7}, 0).wait(1).to({x: 592.1}, 0).wait(1).to({
            x: 592.3,
            y: 127.6
        }, 0).wait(1).to({x: 592.6, y: 127.5}, 0).wait(1).to({x: 592.9, y: 127.4}, 0).wait(1).to({
            x: 593.1,
            y: 127.3
        }, 0).wait(1).to({x: 593.4}, 0).wait(1).to({x: 593.7, y: 127.2}, 0).wait(1).to({
            x: 593.9,
            y: 127.1
        }, 0).wait(1).to({x: 594.2, y: 127}, 0).wait(1).to({
            x: 594.5,
            y: 126.9
        }, 0).wait(1).to({x: 594.7}, 0).wait(1).to({x: 595, y: 126.8}, 0).wait(1).to({
            x: 584.8,
            y: 126.2,
            alpha: 0.967
        }, 0).wait(1).to({x: 574.6, y: 125.5, alpha: 0.933}, 0).wait(1).to({
            x: 564.5,
            y: 124.9,
            alpha: 0.9
        }, 0).wait(1).to({x: 554.3, y: 124.3, alpha: 0.867}, 0).wait(1).to({
            x: 563.2,
            y: 126.8,
            alpha: 0.833
        }, 0).wait(1).to({x: 572.1, y: 129.4, alpha: 0.8}, 0).wait(1).to({
            x: 581,
            y: 131.9,
            alpha: 0.792
        }, 0).wait(1).to({x: 589.9, y: 134.4, alpha: 0.785}, 0).wait(1).to({
            x: 578,
            y: 131,
            alpha: 0.777
        }, 0).wait(1).to({x: 566.2, y: 127.7, alpha: 0.769}, 0).wait(1).to({
            x: 554.3,
            y: 124.3,
            alpha: 0.762
        }, 0).wait(1).to({x: 567.9, y: 123.4, alpha: 0.754}, 0).wait(1).to({
            x: 581.4,
            y: 122.6,
            alpha: 0.747
        }, 0).wait(1).to({x: 595, y: 121.7, alpha: 0.739}, 0).wait(1).to({
            x: 605.9,
            y: 121.2,
            alpha: 0.731
        }, 0).wait(1).to({x: 616.7, y: 120.7, alpha: 0.724}, 0).wait(1).to({
            x: 627.6,
            y: 120.2,
            alpha: 0.716
        }, 0).wait(1).to({x: 638.5, y: 119.7, alpha: 0.708}, 0).wait(1).to({
            x: 649.3,
            y: 119.2,
            alpha: 0.701
        }, 0).wait(1).to({x: 660.2, y: 118.7, alpha: 0.693}, 0).wait(1).to({
            x: 671.1,
            y: 118.2,
            alpha: 0.685
        }, 0).wait(1).to({x: 682, y: 117.7, alpha: 0.678}, 0).wait(1).to({
            x: 692.8,
            y: 117.2,
            alpha: 0.67
        }, 0).wait(1).to({x: 703.7, y: 116.7, alpha: 0.663}, 0).wait(1).to({
            x: 714.6,
            y: 116.2,
            alpha: 0.655
        }, 0).wait(1).to({x: 725.4, y: 115.7, alpha: 0.647}, 0).wait(1).to({
            x: 736.3,
            y: 115.2,
            alpha: 0.64
        }, 0).wait(1).to({x: 747.2, y: 114.7, alpha: 0.632}, 0).wait(1).to({
            x: 758.1,
            y: 114.2,
            alpha: 0.624
        }, 0).wait(1).to({x: 768.9, y: 113.7, alpha: 0.617}, 0).wait(1).to({
            x: 779.8,
            y: 113.2,
            alpha: 0.609
        }, 0).wait(1).to({x: 790.7, y: 112.7, alpha: 0.601}, 0).wait(1).to({
            x: 801.5,
            y: 112.2,
            alpha: 0.594
        }, 0).wait(1).to({x: 812.4, y: 111.7, alpha: 0.586}, 0).wait(1).to({
            x: 823.3,
            y: 111.3,
            alpha: 0.579
        }, 0).wait(1).to({x: 834.1, y: 110.8, alpha: 0.571}, 0).wait(1).to({
            x: 845,
            y: 110.3,
            alpha: 0.563
        }, 0).wait(1).to({x: 855.9, y: 109.8, alpha: 0.556}, 0).wait(1).to({
            x: 866.7,
            y: 109.3,
            alpha: 0.548
        }, 0).wait(1).to({x: 877.6, y: 108.8, alpha: 0.54}, 0).wait(1).to({
            x: 888.5,
            y: 108.3,
            alpha: 0.533
        }, 0).wait(1).to({x: 899.4, y: 107.8, alpha: 0.525}, 0).wait(1).to({
            x: 910.2,
            y: 107.3,
            alpha: 0.517
        }, 0).wait(1).to({x: 921.1, y: 106.8, alpha: 0.51}, 0).wait(1).to({
            x: 932,
            y: 106.3,
            alpha: 0.502
        }, 0).wait(1).to({x: 942.9, y: 105.8, alpha: 0.495}, 0).wait(1).to({
            x: 953.7,
            y: 105.3,
            alpha: 0.487
        }, 0).wait(1).to({x: 964.6, y: 104.8, alpha: 0.479}, 0).wait(1).to({
            x: 975.5,
            y: 104.3,
            alpha: 0.472
        }, 0).wait(1).to({x: 986.3, y: 103.8, alpha: 0.464}, 0).wait(1).to({
            x: 997.2,
            y: 103.3,
            alpha: 0.456
        }, 0).wait(1).to({x: 1008.1, y: 102.8, alpha: 0.449}, 0).wait(1).to({
            x: 1018.9,
            y: 102.3,
            alpha: 0.441
        }, 0).wait(1).to({x: 1029.8, y: 101.8, alpha: 0.433}, 0).wait(1).to({
            x: 1040.7,
            y: 101.3,
            alpha: 0.426
        }, 0).wait(1).to({x: 1051.6, y: 100.8, alpha: 0.418}, 0).wait(1).to({
            x: 1062.4,
            y: 100.3,
            alpha: 0.411
        }, 0).wait(1).to({x: 1073.3, y: 99.8, alpha: 0.403}, 0).wait(1).to({
            x: 1084.2,
            y: 99.3,
            alpha: 0.395
        }, 0).wait(1).to({x: 1095, y: 98.8, alpha: 0.388}, 0).wait(1).to({
            x: 1105.9,
            y: 98.3,
            alpha: 0.38
        }, 0).wait(1).to({x: 1116.8, y: 97.8}, 0).wait(1).to({x: 1127.7, y: 97.3}, 0).wait(1).to({
            x: 1138.5,
            y: 96.8
        }, 0).wait(1).to({x: 1149.4, y: 96.3}, 0).wait(1).to({_off: true}, 1).wait(541));

        // sun
        this.instance_9 = new lib.sunAlternative();
        this.instance_9.setTransform(542.9, 64, 0.433, 0.433, 0, 0, 0, 106.6, 106.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({
            regX: 192.7,
            regY: 198.9,
            scaleX: 0.44,
            scaleY: 0.44,
            x: 580.6,
            y: 103.8
        }, 0).wait(1).to({scaleX: 0.44, scaleY: 0.44, x: 580.9, y: 103.7}, 0).wait(1).to({
            scaleX: 0.44,
            scaleY: 0.44,
            x: 581.4,
            y: 103.5
        }, 0).wait(1).to({scaleX: 0.44, scaleY: 0.44, x: 581.8, y: 103.4}, 0).wait(1).to({
            scaleX: 0.45,
            scaleY: 0.45,
            x: 582.1,
            y: 103.2
        }, 0).wait(1).to({scaleX: 0.45, scaleY: 0.45, x: 582.6, y: 103.1}, 0).wait(1).to({
            scaleX: 0.45,
            scaleY: 0.45,
            x: 582.9,
            y: 102.9
        }, 0).wait(1).to({scaleX: 0.45, scaleY: 0.45, x: 583.3, y: 102.8}, 0).wait(1).to({
            scaleX: 0.46,
            scaleY: 0.46,
            x: 583.7,
            y: 102.6
        }, 0).wait(1).to({scaleX: 0.46, scaleY: 0.46, x: 584.1, y: 102.5}, 0).wait(1).to({
            scaleX: 0.46,
            scaleY: 0.46,
            x: 584.5,
            y: 102.4
        }, 0).wait(1).to({scaleX: 0.47, scaleY: 0.47, x: 584.9, y: 102.2}, 0).wait(1).to({
            scaleX: 0.47,
            scaleY: 0.47,
            x: 585.3,
            y: 102
        }, 0).wait(1).to({scaleX: 0.47, scaleY: 0.47, x: 585.7, y: 101.9}, 0).wait(1).to({
            scaleX: 0.47,
            scaleY: 0.47,
            x: 586.1,
            y: 101.8
        }, 0).wait(1).to({scaleX: 0.48, scaleY: 0.48, x: 586.5, y: 101.6}, 0).wait(1).to({
            scaleX: 0.48,
            scaleY: 0.48,
            x: 586.9,
            y: 101.5
        }, 0).wait(1).to({scaleX: 0.48, scaleY: 0.48, x: 587.3, y: 101.3}, 0).wait(1).to({
            scaleX: 0.49,
            scaleY: 0.49,
            x: 587.7,
            y: 101.2
        }, 0).wait(1).to({scaleX: 0.49, scaleY: 0.49, x: 588.1, y: 101}, 0).wait(1).to({
            scaleX: 0.49,
            scaleY: 0.49,
            x: 588.4,
            y: 100.9
        }, 0).wait(1).to({scaleX: 0.49, scaleY: 0.49, x: 588.9, y: 100.7}, 0).wait(1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            x: 589.2,
            y: 100.6
        }, 0).wait(1).to({scaleX: 0.5, scaleY: 0.5, x: 589.6, y: 100.5}, 0).wait(1).to({
            scaleX: 0.5,
            scaleY: 0.5,
            x: 590,
            y: 100.3
        }, 0).wait(1).to({scaleX: 0.5, scaleY: 0.5, x: 590.4, y: 100.2}, 0).wait(1).to({
            scaleX: 0.51,
            scaleY: 0.51,
            x: 590.8,
            y: 100
        }, 0).wait(1).to({scaleX: 0.51, scaleY: 0.51, x: 591.2, y: 99.9}, 0).wait(1).to({
            scaleX: 0.51,
            scaleY: 0.51,
            x: 591.6,
            y: 99.8
        }, 0).wait(1).to({scaleX: 0.52, scaleY: 0.52, x: 592, y: 99.6}, 0).wait(1).to({
            scaleX: 0.52,
            scaleY: 0.52,
            x: 592.4,
            y: 99.5
        }, 0).wait(1).to({scaleX: 0.52, scaleY: 0.52, x: 592.8, y: 99.3}, 0).wait(1).to({
            scaleX: 0.52,
            scaleY: 0.52,
            x: 593.2,
            y: 99.1
        }, 0).wait(1).to({scaleX: 0.53, scaleY: 0.53, x: 593.6, y: 99}, 0).wait(1).to({
            scaleX: 0.53,
            scaleY: 0.53,
            x: 594,
            y: 98.9
        }, 0).wait(1).to({scaleX: 0.53, scaleY: 0.53, x: 594.4, y: 98.7}, 0).wait(1).to({
            scaleX: 0.53,
            scaleY: 0.53,
            x: 594.8,
            y: 98.6
        }, 0).wait(1).to({scaleX: 0.54, scaleY: 0.54, x: 595.2, y: 98.5}, 0).wait(1).to({
            scaleX: 0.54,
            scaleY: 0.54,
            x: 595.6,
            y: 98.3
        }, 0).wait(1).to({scaleX: 0.54, scaleY: 0.54, x: 595.9, y: 98.1}, 0).wait(1).to({
            scaleX: 0.55,
            scaleY: 0.55,
            x: 596.4,
            y: 98
        }, 0).wait(1).to({scaleX: 0.55, scaleY: 0.55, x: 596.7, y: 97.8}, 0).wait(1).to({
            scaleX: 0.55,
            scaleY: 0.55,
            x: 597.1,
            y: 97.7
        }, 0).wait(1).to({scaleX: 0.55, scaleY: 0.55, x: 597.5, y: 97.6}, 0).wait(1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 597.9,
            y: 97.4
        }, 0).wait(1).to({scaleX: 0.56, scaleY: 0.56, x: 598.3, y: 97.3}, 0).wait(1).to({
            scaleX: 0.56,
            scaleY: 0.56,
            x: 598.7,
            y: 97.1
        }, 0).wait(1).to({scaleX: 0.56, scaleY: 0.56, x: 599.1, y: 97}, 0).wait(1).to({
            scaleX: 0.58,
            scaleY: 0.58,
            x: 599.6,
            y: 98.4
        }, 0).wait(1).to({scaleX: 0.59, scaleY: 0.59, x: 600.1, y: 99.8}, 0).wait(1).to({
            scaleX: 0.61,
            scaleY: 0.61,
            x: 600.6,
            y: 101.2
        }, 0).wait(1).to({scaleX: 0.63, scaleY: 0.63, x: 601.1, y: 102.6}, 0).wait(1).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: 601.6,
            y: 104
        }, 0).wait(1).to({scaleX: 0.66, scaleY: 0.66, x: 602.1, y: 105.4}, 0).wait(1).to({
            scaleX: 0.67,
            scaleY: 0.67,
            x: 602.6,
            y: 106.8
        }, 0).wait(1).to({scaleX: 0.66, scaleY: 0.66, x: 601, y: 106.1}, 0).wait(1).to({
            scaleX: 0.65,
            scaleY: 0.65,
            x: 599.5,
            y: 105.3
        }, 0).wait(1).to({scaleX: 0.65, scaleY: 0.65, x: 597.9, y: 104.6}, 0).wait(1).to({
            scaleX: 0.64,
            scaleY: 0.64,
            x: 596.4,
            y: 103.8
        }, 0).wait(1).to({scaleX: 0.63, scaleY: 0.63, x: 594.9, y: 103}, 0).wait(1).to({
            scaleX: 0.62,
            scaleY: 0.62,
            x: 593.4,
            y: 102.3
        }, 0).wait(1).to({scaleX: 0.61, scaleY: 0.61, x: 591.8, y: 101.5}, 0).wait(1).to({
            scaleX: 0.62,
            scaleY: 0.62,
            x: 591.9,
            y: 102
        }, 0).wait(1).to({scaleX: 0.63, scaleY: 0.63, x: 592, y: 102.6}, 0).wait(1).to({
            scaleX: 0.63,
            scaleY: 0.63,
            y: 103.2
        }, 0).wait(1).to({scaleX: 0.64, scaleY: 0.64, x: 592.1, y: 103.7}, 0).wait(1).to({
            scaleX: 0.65,
            scaleY: 0.65,
            x: 592.2,
            y: 104.2
        }, 0).wait(1).to({scaleX: 0.66, scaleY: 0.66, x: 592.3, y: 104.8}, 0).wait(1).to({
            scaleX: 0.66,
            scaleY: 0.66,
            x: 592.4,
            y: 105.4
        }, 0).wait(1).to({scaleX: 0.67, scaleY: 0.67, y: 105.9}, 0).wait(1).to({
            scaleX: 0.68,
            scaleY: 0.68,
            x: 592.5,
            y: 106.5
        }, 0).wait(1).to({scaleX: 0.68, scaleY: 0.68, x: 592.6, y: 107.1}, 0).wait(1).to({
            scaleX: 0.69,
            scaleY: 0.69,
            y: 107.6
        }, 0).wait(1).to({scaleX: 0.7, scaleY: 0.7, x: 592.7, y: 108.1}, 0).wait(1).to({
            scaleX: 0.71,
            scaleY: 0.71,
            x: 592.8,
            y: 108.7
        }, 0).wait(1).to({scaleX: 0.71, scaleY: 0.71, x: 592.9, y: 109.3}, 0).wait(1).to({
            scaleX: 0.72,
            scaleY: 0.72,
            x: 593,
            y: 109.8
        }, 0).wait(1).to({scaleX: 0.73, scaleY: 0.73, y: 110.4}, 0).wait(1).to({
            scaleX: 0.73,
            scaleY: 0.73,
            x: 593.1,
            y: 110.9
        }, 0).wait(1).to({scaleX: 0.74, scaleY: 0.74, x: 593.2, y: 111.5}, 0).wait(1).to({
            scaleX: 0.75,
            scaleY: 0.75,
            y: 112
        }, 0).wait(1).to({scaleX: 0.76, scaleY: 0.76, x: 593.3, y: 112.6}, 0).wait(1).to({
            scaleX: 0.76,
            scaleY: 0.76,
            x: 593.4,
            y: 113.1
        }, 0).wait(1).to({scaleX: 0.77, scaleY: 0.77, x: 593.5, y: 113.6}, 0).wait(1).to({
            scaleX: 0.78,
            scaleY: 0.78,
            y: 114.2
        }, 0).wait(1).to({scaleX: 0.78, scaleY: 0.78, x: 593.6, y: 114.8}, 0).wait(1).to({
            scaleX: 0.79,
            scaleY: 0.79,
            x: 593.7,
            y: 115.3
        }, 0).wait(1).to({scaleX: 0.8, scaleY: 0.8, x: 593.8, y: 115.9}, 0).wait(1).to({
            scaleX: 0.8,
            scaleY: 0.8,
            y: 116.5
        }, 0).wait(1).to({scaleX: 0.81, scaleY: 0.81, x: 593.9, y: 117}, 0).wait(1).to({
            scaleX: 0.82,
            scaleY: 0.82,
            x: 594,
            y: 117.5
        }, 0).wait(1).to({scaleX: 0.83, scaleY: 0.83, x: 594.1, y: 118.1}, 0).wait(1).to({
            scaleX: 0.83,
            scaleY: 0.83,
            y: 118.7
        }, 0).wait(1).to({scaleX: 0.84, scaleY: 0.84, x: 594.2, y: 119.2}, 0).wait(1).to({
            scaleX: 0.85,
            scaleY: 0.85,
            x: 594.3,
            y: 119.8
        }, 0).wait(1).to({scaleX: 0.85, scaleY: 0.85, y: 120.3}, 0).wait(1).to({
            scaleX: 0.86,
            scaleY: 0.86,
            x: 594.4,
            y: 120.9
        }, 0).wait(1).to({scaleX: 0.87, scaleY: 0.87, x: 594.5, y: 121.4}, 0).wait(1).to({
            scaleX: 0.88,
            scaleY: 0.88,
            x: 594.6,
            y: 122
        }, 0).wait(1).to({scaleX: 0.88, scaleY: 0.88, x: 594.7, y: 122.5}, 0).wait(1).to({
            scaleX: 0.89,
            scaleY: 0.89,
            y: 123.1
        }, 0).wait(1).to({scaleX: 0.9, scaleY: 0.9, x: 594.8, y: 123.6}, 0).wait(1).to({
            scaleX: 0.9,
            scaleY: 0.9,
            x: 594.9,
            y: 124.2
        }, 0).wait(1).to({scaleX: 0.91, scaleY: 0.91, y: 124.7}, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            x: 595,
            y: 125.3
        }, 0).wait(1).to({scaleX: 0.93, scaleY: 0.93, x: 595.1, y: 125.9}, 0).wait(1).to({
            scaleX: 0.93,
            scaleY: 0.93,
            y: 126.4
        }, 0).wait(1).to({scaleX: 0.94, scaleY: 0.94, x: 595.2, y: 126.9}, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            x: 595.3,
            y: 127.5
        }, 0).wait(1).to({scaleX: 0.95, scaleY: 0.95, x: 595.4, y: 128.1}, 0).wait(1).to({
            scaleX: 0.96,
            scaleY: 0.96,
            x: 595.5,
            y: 128.6
        }, 0).wait(1).to({scaleX: 0.97, scaleY: 0.97, y: 129.2}, 0).wait(1).to({
            scaleX: 0.98,
            scaleY: 0.98,
            x: 595.6,
            y: 129.7
        }, 0).wait(1).to({scaleX: 0.98, scaleY: 0.98, x: 595.7, y: 130.3}, 0).wait(1).to({
            scaleX: 0.98,
            scaleY: 0.98,
            x: 595.2,
            y: 130.4
        }, 0).wait(1).to({scaleX: 0.98, scaleY: 0.98, x: 594.9, y: 130.5}, 0).wait(1).to({
            x: 594.4,
            y: 130.6
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 594, y: 130.7}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 593.5,
            y: 130.9
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 593.1, y: 131}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 592.7,
            y: 131.1
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 592.3, y: 131.2}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 591.9,
            y: 131.3
        }, 0).wait(1).to({x: 591.4, y: 131.5}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 591,
            y: 131.6
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 590.5, y: 131.7}, 0).wait(1).to({
            scaleX: 0.99,
            scaleY: 0.99,
            x: 590.2,
            y: 131.8
        }, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, x: 589.7, y: 131.9}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 589.3,
            y: 132.1
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 588.9, y: 132.2}, 0).wait(1).to({
            x: 588.4,
            y: 132.3
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 588, y: 132.4}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 587.6,
            y: 132.6
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 587.2, y: 132.7}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 586.7,
            y: 132.8
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 586.3, y: 132.9}, 0).wait(1).to({
            x: 585.9,
            y: 133.1
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 585.4, y: 133.2}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 585,
            y: 133.3
        }, 0).wait(1).to({scaleX: 1, scaleY: 1, x: 584.6, y: 133.4}, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: 584.2,
            y: 133.5
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 583.7, y: 133.7}, 0).wait(1).to({
            scaleX: 1.01,
            scaleY: 1.01,
            x: 583.3,
            y: 133.8
        }, 0).wait(1).to({x: 582.9, y: 133.9}, 0).wait(1).to({
            scaleX: 1.01,
            scaleY: 1.01,
            x: 582.5,
            y: 134
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 582, y: 134.1}, 0).wait(1).to({
            scaleX: 1.01,
            scaleY: 1.01,
            x: 581.6,
            y: 134.3
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 581.2, y: 134.4}, 0).wait(1).to({
            scaleX: 1.01,
            scaleY: 1.01,
            x: 580.7,
            y: 134.5
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 580.3, y: 134.6}, 0).wait(1).to({
            x: 579.9,
            y: 134.7
        }, 0).wait(1).to({scaleX: 1.01, scaleY: 1.01, x: 579.5, y: 134.9}, 0).wait(1).to({
            scaleX: 1.01,
            scaleY: 1.01,
            x: 579,
            y: 135
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 578.6, y: 135.1}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 578.2,
            y: 135.2
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 577.8, y: 135.3}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 577.3,
            y: 135.5
        }, 0).wait(1).to({x: 576.9, y: 135.6}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 576.5,
            y: 135.7
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 576, y: 135.8}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 575.7,
            y: 135.9
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 575.2, y: 136.1}, 0).wait(1).to({
            scaleX: 1.02,
            scaleY: 1.02,
            x: 574.8,
            y: 136.2
        }, 0).wait(1).to({scaleX: 1.02, scaleY: 1.02, x: 574.4, y: 136.3}, 0).wait(1).to({
            x: 573.9,
            y: 136.4
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 573.5, y: 136.5}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 573.1,
            y: 136.7
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 572.7, y: 136.8}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 572.2,
            y: 136.9
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 571.8, y: 137}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 571.4,
            y: 137.1
        }, 0).wait(1).to({x: 570.9, y: 137.3}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 570.5,
            y: 137.4
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 570.1, y: 137.5}, 0).wait(1).to({
            scaleX: 1.03,
            scaleY: 1.03,
            x: 569.7,
            y: 137.6
        }, 0).wait(1).to({scaleX: 1.03, scaleY: 1.03, x: 569.2, y: 137.7}, 0).wait(1).to({
            scaleX: 1.04,
            scaleY: 1.04,
            x: 568.8,
            y: 137.9
        }, 0).wait(1).to({x: 568.4, y: 138}, 0).wait(1).to({
            scaleX: 1.04,
            scaleY: 1.04,
            x: 568,
            y: 138.1
        }, 0).wait(1).to({scaleX: 1.04, scaleY: 1.04, x: 567.5, y: 138.2}, 0).wait(1).to({
            scaleX: 1.04,
            scaleY: 1.04,
            x: 567.1,
            y: 138.3
        }, 0).wait(1).to({scaleX: 1.04, scaleY: 1.04, x: 566.7, y: 138.5}, 0).wait(1).to({
            scaleX: 1.04,
            scaleY: 1.04,
            x: 566.2,
            y: 138.6
        }, 0).wait(1).to({scaleX: 1.04, scaleY: 1.04, x: 565.8, y: 138.7}, 0).wait(1).to({
            x: 565.4,
            y: 138.8
        }, 0).wait(1).to({scaleX: 1.04, scaleY: 1.04, x: 565, y: 138.9}, 0).wait(1).to({
            scaleX: 1.04,
            scaleY: 1.04,
            x: 564.5,
            y: 139.1
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, x: 564.1, y: 139.2}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 563.7,
            y: 139.3
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, x: 563.3, y: 139.4}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 562.8,
            y: 139.5
        }, 0).wait(1).to({x: 562.4, y: 139.7}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 562,
            y: 139.8
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, x: 561.5, y: 139.9}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 561.1,
            y: 140
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, x: 560.7, y: 140.1}, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05,
            x: 560.3,
            y: 140.3
        }, 0).wait(1).to({scaleX: 1.05, scaleY: 1.05, x: 559.8, y: 140.4}, 0).wait(1).to({
            x: 559.4,
            y: 140.5
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 559, y: 140.6}, 0).wait(1).to({
            scaleX: 1.06,
            scaleY: 1.06,
            x: 558.6,
            y: 140.7
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 558.2, y: 140.9}, 0).wait(1).to({
            scaleX: 1.06,
            scaleY: 1.06,
            x: 557.7,
            y: 141
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 557.3, y: 141.1}, 0).wait(1).to({
            scaleX: 1.06,
            scaleY: 1.06,
            x: 556.8,
            y: 141.2
        }, 0).wait(1).to({x: 556.4, y: 141.3}, 0).wait(1).to({
            scaleX: 1.06,
            scaleY: 1.06,
            x: 556,
            y: 141.5
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 555.6, y: 141.6}, 0).wait(1).to({
            scaleX: 1.06,
            scaleY: 1.06,
            x: 555.2,
            y: 141.7
        }, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, x: 554.7, y: 141.8}, 0).wait(1).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 554.3,
            y: 141.9
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 553.9, y: 142.1}, 0).wait(1).to({
            x: 553.5,
            y: 142.2
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 553, y: 142.3}, 0).wait(1).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 552.6,
            y: 142.4
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 552.2, y: 142.5}, 0).wait(1).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 551.7,
            y: 142.7
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 551.3, y: 142.8}, 0).wait(1).to({
            x: 550.9,
            y: 142.9
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 550.5, y: 143}, 0).wait(1).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 550,
            y: 143.1
        }, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 549.6, y: 143.3}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            x: 549.2,
            y: 143.4
        }, 0).wait(1).to({scaleX: 1.08, scaleY: 1.08, x: 548.8, y: 143.5}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            x: 548.3,
            y: 143.7
        }, 0).wait(1).to({x: 547.9, y: 143.8}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            x: 547.5,
            y: 143.9
        }, 0).wait(1).to({scaleX: 1.08, scaleY: 1.08, x: 547, y: 144}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            x: 546.6,
            y: 144.1
        }, 0).wait(1).to({scaleX: 1.08, scaleY: 1.08, x: 546.2, y: 144.3}, 0).wait(1).to({
            scaleX: 1.08,
            scaleY: 1.08,
            x: 545.8,
            y: 144.4
        }, 0).wait(1).to({scaleX: 1.08, scaleY: 1.08, x: 545.3, y: 144.5}, 0).wait(1).to({
            x: 544.9,
            y: 144.6
        }, 0).wait(1).to({scaleX: 1.08, scaleY: 1.08, x: 544.5, y: 144.7}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 544.1,
            y: 144.9
        }, 0).wait(1).to({scaleX: 1.09, scaleY: 1.09, x: 543.6, y: 145}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 543.2,
            y: 145.1
        }, 0).wait(1).to({scaleX: 1.09, scaleY: 1.09, x: 542.8, y: 145.2}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 542.3,
            y: 145.3
        }, 0).wait(1).to({x: 541.9, y: 145.5}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 541.5,
            y: 145.6
        }, 0).wait(1).to({scaleX: 1.09, scaleY: 1.09, x: 541.1, y: 145.7}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 540.6,
            y: 145.8
        }, 0).wait(1).to({scaleX: 1.09, scaleY: 1.09, x: 540.2, y: 145.9}, 0).wait(1).to({
            scaleX: 1.09,
            scaleY: 1.09,
            x: 539.8,
            y: 146.1
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, x: 539.4, y: 146.2}, 0).wait(1).to({
            x: 539,
            y: 146.3
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, x: 538.5, y: 146.4}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 538.1,
            y: 146.5
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, x: 537.6, y: 146.7}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 537.2,
            y: 146.8
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, x: 536.8, y: 146.9}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 536.4,
            y: 147
        }, 0).wait(1).to({x: 536, y: 147.1}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 535.5,
            y: 147.3
        }, 0).wait(1).to({scaleX: 1.1, scaleY: 1.1, x: 535.1, y: 147.4}, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: 1.1,
            x: 534.6,
            y: 147.5
        }, 0).wait(1).to({scaleX: 1.11, scaleY: 1.11, x: 534.3, y: 147.6}, 0).wait(1).to({
            scaleX: 1.11,
            scaleY: 1.11,
            x: 533.8,
            y: 147.7
        }, 0).wait(1).to({x: 533.4, y: 147.9}, 0).wait(1).to({
            scaleX: 1.11,
            scaleY: 1.11,
            x: 533,
            y: 148
        }, 0).wait(1).to({scaleX: 1.11, scaleY: 1.11, x: 532.5, y: 148.1}, 0).wait(1).to({
            scaleX: 1.11,
            scaleY: 1.11,
            x: 532.1,
            y: 148.2
        }, 0).wait(1).to({scaleX: 1.11, scaleY: 1.11, x: 531.7, y: 148.3}, 0).wait(1).to({
            scaleX: 1.11,
            scaleY: 1.11,
            x: 531.3,
            y: 148.5
        }, 0).wait(1).to({scaleX: 1.11, scaleY: 1.11, x: 530.8, y: 148.6}, 0).wait(1).to({
            x: 530.4,
            y: 148.7
        }, 0).wait(1).to({scaleX: 1.11, scaleY: 1.11, x: 530, y: 148.8}, 0).wait(1).to({
            scaleX: 1.11,
            scaleY: 1.11,
            x: 529.6,
            y: 148.9
        }, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, x: 529.1, y: 149.1}, 0).wait(1).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 528.7,
            y: 149.2
        }, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, x: 528.3, y: 149.3}, 0).wait(1).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 528.4,
            y: 149.1
        }, 0).wait(1).to({x: 528.5, y: 148.8}, 0).wait(1).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 528.7,
            y: 148.5
        }, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, x: 528.8, y: 148.3}, 0).wait(1).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 528.9,
            y: 148
        }, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, x: 529, y: 147.8}, 0).wait(1).to({
            scaleX: 1.12,
            scaleY: 1.12,
            x: 529.1,
            y: 147.5
        }, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, x: 529.2, y: 147.3}, 0).wait(1).to({
            x: 529.3,
            y: 147
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 529.5, y: 146.8}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: 529.6,
            y: 146.6
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 529.7, y: 146.3}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: 529.9,
            y: 146
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 530, y: 145.8}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: 530.1,
            y: 145.5
        }, 0).wait(1).to({x: 530.2, y: 145.3}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: 530.4,
            y: 145
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 530.5, y: 144.8}, 0).wait(1).to({
            scaleX: 1.13,
            scaleY: 1.13,
            x: 530.6,
            y: 144.5
        }, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, x: 530.7, y: 144.3}, 0).wait(1).to({
            scaleX: 1.14,
            scaleY: 1.14,
            x: 530.8,
            y: 144.1
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 530.9, y: 143.8}, 0).wait(1).to({
            x: 531.1,
            y: 143.5
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 531.2, y: 143.3}, 0).wait(1).to({
            scaleX: 1.14,
            scaleY: 1.14,
            x: 531.3,
            y: 143
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 531.4, y: 142.8}, 0).wait(1).to({
            scaleX: 1.14,
            scaleY: 1.14,
            x: 531.6,
            y: 142.5
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 531.7, y: 142.3}, 0).wait(1).to({
            x: 531.8,
            y: 142
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 531.9, y: 141.8}, 0).wait(1).to({
            scaleX: 1.14,
            scaleY: 1.14,
            x: 532.1,
            y: 141.5
        }, 0).wait(1).to({scaleX: 1.14, scaleY: 1.14, x: 532.2, y: 141.3}, 0).wait(1).to({
            scaleX: 1.15,
            scaleY: 1.15,
            x: 532.3,
            y: 141
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, x: 532.4, y: 140.8}, 0).wait(1).to({
            scaleX: 1.15,
            scaleY: 1.15,
            x: 532.5,
            y: 140.5
        }, 0).wait(1).to({x: 532.6, y: 140.3}, 0).wait(1).to({
            scaleX: 1.15,
            scaleY: 1.15,
            x: 532.8,
            y: 140
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, x: 532.9, y: 139.8}, 0).wait(1).to({
            scaleX: 1.15,
            scaleY: 1.15,
            x: 533,
            y: 139.5
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, x: 533.1, y: 139.3}, 0).wait(1).to({
            scaleX: 1.15,
            scaleY: 1.15,
            x: 533.3,
            y: 139
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, x: 533.4, y: 138.8}, 0).wait(1).to({
            x: 533.5,
            y: 138.5
        }, 0).wait(1).to({scaleX: 1.15, scaleY: 1.15, x: 533.7, y: 138.3}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 533.8,
            y: 138
        }, 0).wait(1).to({scaleX: 1.16, scaleY: 1.16, x: 533.9, y: 137.8}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 534,
            y: 137.5
        }, 0).wait(1).to({scaleX: 1.16, scaleY: 1.16, x: 534.1, y: 137.3}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 534.2,
            y: 137
        }, 0).wait(1).to({x: 534.3, y: 136.8}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 534.5,
            y: 136.5
        }, 0).wait(1).to({scaleX: 1.16, scaleY: 1.16, x: 534.6, y: 136.3}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 534.7,
            y: 136
        }, 0).wait(1).to({scaleX: 1.16, scaleY: 1.16, x: 534.9, y: 135.8}, 0).wait(1).to({
            scaleX: 1.16,
            scaleY: 1.16,
            x: 535,
            y: 135.5
        }, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, x: 535.1, y: 135.3}, 0).wait(1).to({
            x: 535.2,
            y: 135
        }, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, x: 535.4, y: 134.7}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 535.5,
            y: 134.5
        }, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, x: 535.6, y: 134.3}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 535.7,
            y: 134
        }, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, x: 535.8, y: 133.8}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 535.9,
            y: 133.5
        }, 0).wait(1).to({x: 536, y: 133.3}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 536.2,
            y: 133
        }, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, x: 536.3, y: 132.7}, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            x: 536.4,
            y: 132.5
        }, 0).wait(1).to({scaleX: 1.18, scaleY: 1.18, x: 536.6, y: 132.2}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            x: 536.7,
            y: 132
        }, 0).wait(1).to({x: 536.8, y: 131.8}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            x: 536.9,
            y: 131.5
        }, 0).wait(1).to({scaleX: 1.18, scaleY: 1.18, x: 537.1, y: 131.3}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            x: 537.2,
            y: 131
        }, 0).wait(1).to({scaleX: 1.18, scaleY: 1.18, x: 537.3, y: 130.8}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            x: 537.4,
            y: 130.5
        }, 0).wait(1).to({scaleX: 1.18, scaleY: 1.18, x: 537.5, y: 130.2}, 0).wait(1).to({
            x: 537.6,
            y: 130
        }, 0).wait(1).to({scaleX: 1.18, scaleY: 1.18, x: 537.8, y: 129.7}, 0).wait(1).to({
            scaleX: 1.18,
            scaleY: 1.18,
            x: 537.9,
            y: 129.5
        }, 0).wait(1).to({scaleX: 1.19, scaleY: 1.19, x: 538, y: 129.3}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 538.1,
            y: 129
        }, 0).wait(1).to({scaleX: 1.19, scaleY: 1.19, x: 538.3, y: 128.8}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 538.4,
            y: 128.5
        }, 0).wait(1).to({x: 538.5, y: 128.3}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 538.7,
            y: 128
        }, 0).wait(1).to({scaleX: 1.19, scaleY: 1.19, x: 538.8, y: 127.7}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 538.9,
            y: 127.5
        }, 0).wait(1).to({scaleX: 1.19, scaleY: 1.19, x: 539, y: 127.2}, 0).wait(1).to({
            scaleX: 1.19,
            scaleY: 1.19,
            x: 539.1,
            y: 127
        }, 0).wait(1).to({scaleX: 1.19, scaleY: 1.19, x: 539.2, y: 126.7}, 0).wait(1).to({
            x: 539.3,
            y: 126.5
        }, 0).wait(1).to({scaleX: 1.2, scaleY: 1.2, x: 539.5, y: 126.3}, 0).wait(1).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 539.6,
            y: 126
        }, 0).wait(1).to({scaleX: 1.2, scaleY: 1.2, x: 539.7, y: 125.8}, 0).wait(1).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 539.8,
            y: 125.5
        }, 0).wait(1).to({scaleX: 1.2, scaleY: 1.2, x: 540, y: 125.2}, 0).wait(1).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 540.1,
            y: 125
        }, 0).wait(1).to({x: 540.2, y: 124.7}, 0).wait(1).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 540.4,
            y: 124.5
        }, 0).wait(1).to({scaleX: 1.2, scaleY: 1.2, x: 540.5, y: 124.2}, 0).wait(1).to({
            scaleX: 1.2,
            scaleY: 1.2,
            x: 540.6,
            y: 124
        }, 0).wait(1).to({scaleX: 1.2, scaleY: 1.2, x: 540.7, y: 123.8}, 0).wait(1).to({
            scaleX: 1.21,
            scaleY: 1.21,
            x: 540.8,
            y: 123.5
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 540.9, y: 123.3}, 0).wait(1).to({
            x: 541.1,
            y: 123
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 541.2, y: 122.7}, 0).wait(1).to({
            scaleX: 1.21,
            scaleY: 1.21,
            x: 541.3,
            y: 122.5
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 541.4, y: 122.2}, 0).wait(1).to({
            scaleX: 1.21,
            scaleY: 1.21,
            x: 541.5,
            y: 122
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 541.7, y: 121.7}, 0).wait(1).to({
            x: 541.8,
            y: 121.5
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 541.9, y: 121.3}, 0).wait(1).to({
            scaleX: 1.21,
            scaleY: 1.21,
            x: 542.1,
            y: 121
        }, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, x: 542.2, y: 120.7}, 0).wait(1).to({
            scaleX: 1.22,
            scaleY: 1.22,
            x: 542.3,
            y: 120.5
        }, 0).wait(1).to({scaleX: 1.22, scaleY: 1.22, x: 542.4, y: 120.2}, 0).wait(1).to({
            scaleX: 1.22,
            scaleY: 1.22,
            x: 542.5,
            y: 120
        }, 0).wait(1).to({x: 542.6, y: 119.7}, 0).wait(1).to({
            scaleX: 1.22,
            scaleY: 1.22,
            x: 542.8,
            y: 119.5
        }, 0).wait(1).to({scaleX: 1.22, scaleY: 1.22, x: 542.9, y: 119.2}, 0).wait(1).to({
            scaleX: 1.22,
            scaleY: 1.22,
            x: 543,
            y: 119
        }, 0).wait(1).to({scaleX: 1.22, scaleY: 1.22, x: 543.1, y: 118.7}, 0).wait(1).to({
            scaleX: 1.22,
            scaleY: 1.22,
            x: 543.3,
            y: 118.5
        }, 0).wait(1).to({scaleX: 1.22, scaleY: 1.22, x: 543.4, y: 118.2}, 0).wait(1).to({
            x: 543.5,
            y: 118
        }, 0).wait(1).to({scaleX: 1.22, scaleY: 1.22, x: 543.6, y: 117.7}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 543.8,
            y: 117.5
        }, 0).wait(1).to({scaleX: 1.23, scaleY: 1.23, x: 543.9, y: 117.2}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 544,
            y: 117
        }, 0).wait(1).to({scaleX: 1.23, scaleY: 1.23, x: 544.1, y: 116.7}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 544.2,
            y: 116.5
        }, 0).wait(1).to({x: 544.3, y: 116.2}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 544.5,
            y: 116
        }, 0).wait(1).to({scaleX: 1.23, scaleY: 1.23, x: 544.6, y: 115.7}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 544.7,
            y: 115.5
        }, 0).wait(1).to({scaleX: 1.23, scaleY: 1.23, x: 544.8, y: 115.2}, 0).wait(1).to({
            scaleX: 1.23,
            scaleY: 1.23,
            x: 545,
            y: 115
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 545.1, y: 114.7}, 0).wait(1).to({
            x: 545.2,
            y: 114.5
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 545.3, y: 114.2}, 0).wait(1).to({
            scaleX: 1.24,
            scaleY: 1.24,
            x: 545.5,
            y: 114
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 545.6, y: 113.7}, 0).wait(1).to({
            scaleX: 1.24,
            scaleY: 1.24,
            x: 545.7,
            y: 113.5
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 545.8, y: 113.2}, 0).wait(1).to({
            scaleX: 1.24,
            scaleY: 1.24,
            x: 545.9,
            y: 113
        }, 0).wait(1).to({x: 546.1, y: 112.7}, 0).wait(1).to({
            scaleX: 1.24,
            scaleY: 1.24,
            x: 546.2,
            y: 112.5
        }, 0).wait(1).to({scaleX: 1.24, scaleY: 1.24, x: 546.3, y: 112.2}, 0).wait(1).to({
            scaleX: 1.24,
            scaleY: 1.24,
            x: 546.4,
            y: 112
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 546.5, y: 111.7}, 0).wait(1).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: 546.7,
            y: 111.5
        }, 0).wait(1).to({x: 546.8, y: 111.2}, 0).wait(1).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: 546.9,
            y: 111
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 547.1, y: 110.7}, 0).wait(1).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: 547.2,
            y: 110.5
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 547.3, y: 110.2}, 0).wait(1).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: 547.4,
            y: 110
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 547.5, y: 109.7}, 0).wait(1).to({
            x: 547.6,
            y: 109.4
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 547.8, y: 109.2}, 0).wait(1).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: 547.9,
            y: 109
        }, 0).wait(1).to({scaleX: 1.25, scaleY: 1.25, x: 548, y: 108.7}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 548.1,
            y: 108.5
        }, 0).wait(1).to({scaleX: 1.26, scaleY: 1.26, x: 548.2, y: 108.2}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 548.4,
            y: 108
        }, 0).wait(1).to({x: 548.5, y: 107.7}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 548.6,
            y: 107.4
        }, 0).wait(1).to({scaleX: 1.26, scaleY: 1.26, x: 548.8, y: 107.2}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 548.9,
            y: 106.9
        }, 0).wait(1).to({scaleX: 1.26, scaleY: 1.26, x: 549, y: 106.7}, 0).wait(1).to({
            scaleX: 1.26,
            scaleY: 1.26,
            x: 549.1,
            y: 106.5
        }, 0).wait(1).to({scaleX: 1.26, scaleY: 1.26, x: 549.2, y: 106.2}, 0).wait(1).to({
            x: 549.3,
            y: 106
        }, 0).wait(1).to({scaleX: 1.26, scaleY: 1.26, x: 549.5, y: 105.7}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 549.6,
            y: 105.5
        }, 0).wait(1).to({scaleX: 1.27, scaleY: 1.27, x: 549.7, y: 105.2}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 549.8,
            y: 104.9
        }, 0).wait(1).to({scaleX: 1.27, scaleY: 1.27, x: 549.9, y: 104.7}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 550.1,
            y: 104.4
        }, 0).wait(1).to({x: 550.2, y: 104.2}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 550.3,
            y: 104
        }, 0).wait(1).to({scaleX: 1.27, scaleY: 1.27, x: 550.5, y: 103.7}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 550.6,
            y: 103.5
        }, 0).wait(1).to({scaleX: 1.27, scaleY: 1.27, x: 550.7, y: 103.2}, 0).wait(1).to({
            scaleX: 1.27,
            scaleY: 1.27,
            x: 550.8,
            y: 103
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 550.9, y: 102.7}, 0).wait(1).to({
            x: 551.1,
            y: 102.4
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 551.2, y: 102.2}, 0).wait(1).to({
            scaleX: 1.28,
            scaleY: 1.28,
            x: 551.3,
            y: 101.9
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 551.4, y: 101.7}, 0).wait(1).to({
            scaleX: 1.28,
            scaleY: 1.28,
            x: 551.5,
            y: 101.4
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 551.7, y: 101.2}, 0).wait(1).to({
            x: 551.8,
            y: 101
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 551.9, y: 100.7}, 0).wait(1).to({
            scaleX: 1.28,
            scaleY: 1.28,
            x: 552,
            y: 100.5
        }, 0).wait(1).to({scaleX: 1.28, scaleY: 1.28, x: 552.2, y: 100.2}, 0).wait(1).to({
            scaleX: 1.29,
            scaleY: 1.29,
            x: 552.3,
            y: 99.9
        }, 0).wait(1).to({scaleX: 1.29, scaleY: 1.29, x: 552.4, y: 99.7}, 0).wait(1).to({
            scaleX: 1.29,
            scaleY: 1.29,
            x: 552.5,
            y: 99.4
        }, 0).wait(1).to({x: 552.6, y: 99.2}, 0).wait(1).to({
            scaleX: 1.29,
            scaleY: 1.29,
            x: 552.8,
            y: 98.9
        }, 0).wait(1).to({scaleX: 1.29, scaleY: 1.29, x: 552.9, y: 98.7}, 0).wait(1).to({
            scaleX: 1.29,
            scaleY: 1.29,
            x: 553,
            y: 98.5
        }, 0).wait(1).to({scaleX: 1.29, scaleY: 1.29, x: 553.1, y: 98.2}, 0).wait(1).to({
            scaleX: 1.29,
            scaleY: 1.29,
            x: 553.2,
            y: 98
        }, 0).wait(1).to({scaleX: 1.29, scaleY: 1.29, x: 553.4, y: 97.7}, 0).wait(1).to({
            x: 553.5,
            y: 97.4
        }, 0).wait(1).to({scaleX: 1.29, scaleY: 1.29, x: 553.6, y: 97.2}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 553.8,
            y: 96.9
        }, 0).wait(1).to({scaleX: 1.3, scaleY: 1.3, x: 553.9, y: 96.7}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 554,
            y: 96.4
        }, 0).wait(1).to({scaleX: 1.3, scaleY: 1.3, x: 554.1, y: 96.2}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 554.2,
            y: 96
        }, 0).wait(1).to({x: 554.3, y: 95.7}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 554.5,
            y: 95.5
        }, 0).wait(1).to({scaleX: 1.3, scaleY: 1.3, x: 554.6, y: 95.2}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 554.7,
            y: 94.9
        }, 0).wait(1).to({scaleX: 1.3, scaleY: 1.3, x: 554.8, y: 94.7}, 0).wait(1).to({
            scaleX: 1.3,
            scaleY: 1.3,
            x: 554.9,
            y: 94.4
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 555.1, y: 94.2}, 0).wait(1).to({
            x: 555.2,
            y: 93.9
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 555.3, y: 93.7}, 0).wait(1).to({
            scaleX: 1.31,
            scaleY: 1.31,
            x: 555.5,
            y: 93.4
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 555.6, y: 93.2}, 0).wait(1).to({
            scaleX: 1.31,
            scaleY: 1.31,
            x: 555.7,
            y: 92.9
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 555.8, y: 92.7}, 0).wait(1).to({
            scaleX: 1.31,
            scaleY: 1.31,
            x: 555.9,
            y: 92.4
        }, 0).wait(1).to({x: 556.1, y: 92.2}, 0).wait(1).to({
            scaleX: 1.31,
            scaleY: 1.31,
            x: 556.2,
            y: 91.9
        }, 0).wait(1).to({scaleX: 1.31, scaleY: 1.31, x: 556.3, y: 91.7}, 0).wait(1).to({
            scaleX: 1.31,
            scaleY: 1.31,
            x: 556.4,
            y: 91.4
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 556.5, y: 91.2}, 0).wait(1).to({
            scaleX: 1.32,
            scaleY: 1.32,
            x: 556.6,
            y: 90.9
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 556.8, y: 90.7}, 0).wait(1).to({
            x: 556.9,
            y: 90.4
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 557, y: 90.2}, 0).wait(1).to({
            scaleX: 1.32,
            scaleY: 1.32,
            x: 557.2,
            y: 89.9
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 557.3, y: 89.7}, 0).wait(1).to({
            scaleX: 1.32,
            scaleY: 1.32,
            x: 557.4,
            y: 89.4
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 557.5, y: 89.2}, 0).wait(1).to({
            x: 557.6,
            y: 88.9
        }, 0).wait(1).to({scaleX: 1.32, scaleY: 1.32, x: 557.8, y: 88.7}, 0).wait(1).to({
            scaleX: 1.32,
            scaleY: 1.32,
            x: 557.9,
            y: 88.4
        }, 0).wait(1).to({scaleX: 1.33, scaleY: 1.33, x: 558, y: 88.2}, 0).wait(1).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: 558.1,
            y: 87.9
        }, 0).wait(1).to({scaleX: 1.33, scaleY: 1.33, x: 557.4, y: 91.3}, 0).wait(1).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: 556.8,
            y: 94.7
        }, 0).wait(1).to({x: 556.1, y: 98.2}, 0).wait(1).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: 555.5,
            y: 101.6
        }, 0).wait(1).to({scaleX: 1.33, scaleY: 1.33, x: 554.8, y: 104.9}, 0).wait(1).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: 554.2,
            y: 108.4
        }, 0).wait(1).to({scaleX: 1.33, scaleY: 1.33, x: 553.5, y: 111.8}, 0).wait(1).to({
            scaleX: 1.33,
            scaleY: 1.33,
            x: 552.8,
            y: 115.2
        }, 0).wait(1).to({scaleX: 1.33, scaleY: 1.33, x: 552.2, y: 118.6}, 0).wait(1).to({
            x: 551.5,
            y: 122
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 550.8, y: 125.4}, 0).wait(1).to({
            scaleX: 1.34,
            scaleY: 1.34,
            x: 550.1,
            y: 128.8
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 549.5, y: 132.2}, 0).wait(1).to({
            scaleX: 1.34,
            scaleY: 1.34,
            x: 548.8,
            y: 135.7
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 548.2, y: 139}, 0).wait(1).to({
            scaleX: 1.34,
            scaleY: 1.34,
            x: 547.5,
            y: 142.5
        }, 0).wait(1).to({x: 546.9, y: 145.9}, 0).wait(1).to({
            scaleX: 1.34,
            scaleY: 1.34,
            x: 546.2,
            y: 149.3
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 545.5, y: 152.7}, 0).wait(1).to({
            scaleX: 1.34,
            scaleY: 1.34,
            x: 544.9,
            y: 156.1
        }, 0).wait(1).to({scaleX: 1.34, scaleY: 1.34, x: 544.2, y: 159.5}, 0).wait(1).to({
            scaleX: 1.35,
            scaleY: 1.35,
            x: 543.5,
            y: 162.9
        }, 0).wait(1).to({scaleX: 1.35, scaleY: 1.35, x: 542.9, y: 166.3}, 0).wait(1).to({
            x: 542.2,
            y: 169.7
        }, 0).wait(1).to({scaleX: 1.35, scaleY: 1.35, x: 541.5, y: 173.1}, 0).wait(1).to({
            scaleX: 1.35,
            scaleY: 1.35,
            x: 540.9,
            y: 176.6
        }, 0).wait(1).to({scaleX: 1.35, scaleY: 1.35, x: 540.2, y: 180}, 0).wait(1).to({
            scaleX: 1.35,
            scaleY: 1.35,
            x: 540.3,
            y: 180.3
        }, 0).wait(1).to({scaleX: 1.35, scaleY: 1.35, x: 540.4, y: 180.7}, 0).wait(1).to({
            scaleX: 1.35,
            scaleY: 1.35,
            x: 540.5,
            y: 181
        }, 0).wait(1).to({x: 540.6, y: 181.4}, 0).wait(1).to({
            scaleX: 1.35,
            scaleY: 1.35,
            x: 540.7,
            y: 181.7
        }, 0).wait(1).to({scaleX: 1.35, scaleY: 1.35, x: 540.8, y: 182.1}, 0).wait(1).to({
            scaleX: 1.36,
            scaleY: 1.36,
            x: 540.9,
            y: 182.4
        }, 0).wait(1).to({scaleX: 1.36, scaleY: 1.36, x: 541, y: 182.8}, 0).wait(1).to({
            scaleX: 1.36,
            scaleY: 1.36,
            y: 183.2
        }, 0).wait(1).to({x: 541.2, y: 183.5}, 0).wait(1).to({
            scaleX: 1.36,
            scaleY: 1.36,
            y: 183.8
        }, 0).wait(1).to({scaleX: 1.36, scaleY: 1.36, x: 541.3, y: 184.2}, 0).wait(1).to({
            scaleX: 1.36,
            scaleY: 1.36,
            x: 541.5,
            y: 184.5
        }, 0).wait(1).to({scaleX: 1.36, scaleY: 1.36, y: 184.9}, 0).wait(1).to({
            scaleX: 1.36,
            scaleY: 1.36,
            x: 541.6,
            y: 185.3
        }, 0).wait(1).to({scaleX: 1.36, scaleY: 1.36, x: 541.7, y: 185.6}, 0).wait(1).to({
            x: 541.8,
            y: 186
        }, 0).wait(1).to({scaleX: 1.36, scaleY: 1.36, x: 541.9, y: 186.3}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 542,
            y: 186.7
        }, 0).wait(1).to({scaleX: 1.37, scaleY: 1.37, x: 542.1, y: 187}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 542.2,
            y: 187.4
        }, 0).wait(1).to({scaleX: 1.37, scaleY: 1.37, x: 542.3, y: 187.7}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            y: 188.1
        }, 0).wait(1).to({x: 542.5, y: 188.5}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 542.6,
            y: 188.8
        }, 0).wait(1).to({scaleX: 1.37, scaleY: 1.37, y: 189.1}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 542.8,
            y: 189.5
        }, 0).wait(1).to({scaleX: 1.37, scaleY: 1.37, y: 189.8}, 0).wait(1).to({
            scaleX: 1.37,
            scaleY: 1.37,
            x: 542.9,
            y: 190.2
        }, 0).wait(1).to({scaleX: 1.38, scaleY: 1.38, x: 543, y: 190.5}, 0).wait(1).to({
            x: 543.1,
            y: 190.9
        }, 0).wait(1).to({scaleX: 1.38, scaleY: 1.38, x: 543.2, y: 191.3}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 543.3,
            y: 191.6
        }, 0).wait(1).to({scaleX: 1.38, scaleY: 1.38, x: 543.4, y: 192}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 543.5,
            y: 192.3
        }, 0).wait(1).to({scaleX: 1.38, scaleY: 1.38, x: 543.6, y: 192.6}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 543.7,
            y: 193
        }, 0).wait(1).to({x: 543.8, y: 193.4}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 543.9,
            y: 193.7
        }, 0).wait(1).to({scaleX: 1.38, scaleY: 1.38, y: 194.1}, 0).wait(1).to({
            scaleX: 1.38,
            scaleY: 1.38,
            x: 544.1,
            y: 194.4
        }, 0).wait(1).to({scaleX: 1.39, scaleY: 1.39, y: 194.8}, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 544.2,
            y: 195.1
        }, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 544.4,
            y: 195.5
        }, 0).wait(1).to({y: 195.8}, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 544.5,
            y: 196.2
        }, 0).wait(1).to({scaleX: 1.39, scaleY: 1.39, x: 544.6, y: 196.6}, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 544.7,
            y: 196.9
        }, 0).wait(1).to({scaleX: 1.39, scaleY: 1.39, x: 544.8, y: 197.2}, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 544.9,
            y: 197.6
        }, 0).wait(1).to({x: 545, y: 197.9}, 0).wait(1).to({
            scaleX: 1.39,
            scaleY: 1.39,
            x: 545.1,
            y: 198.3
        }, 0).wait(1).to({scaleX: 1.39, scaleY: 1.39, x: 545.2, y: 198.7}, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            y: 199
        }, 0).wait(1).to({scaleX: 1.4, scaleY: 1.4, x: 545.4, y: 199.4}, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            x: 545.5,
            y: 199.7
        }, 0).wait(1).to({scaleX: 1.4, scaleY: 1.4, y: 200.1}, 0).wait(1).to({
            x: 545.7,
            y: 200.4
        }, 0).wait(1).to({scaleX: 1.4, scaleY: 1.4, y: 200.8}, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            x: 545.8,
            y: 201.1
        }, 0).wait(1).to({scaleX: 1.4, scaleY: 1.4, x: 546, y: 201.5}, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            y: 201.8
        }, 0).wait(1).to({scaleX: 1.4, scaleY: 1.4, x: 546.1, y: 202.2}, 0).wait(1).to({
            scaleX: 1.4,
            scaleY: 1.4,
            x: 546.2,
            y: 202.5
        }, 0).wait(1).to({x: 546.3, y: 202.9}, 0).wait(1).to({
            scaleX: 1.41,
            scaleY: 1.41,
            x: 546.4,
            y: 203.2
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, x: 546.5, y: 203.6}, 0).wait(1).to({
            scaleX: 1.41,
            scaleY: 1.41,
            x: 546.6,
            y: 203.9
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, x: 546.7, y: 204.3}, 0).wait(1).to({
            scaleX: 1.41,
            scaleY: 1.41,
            x: 546.8,
            y: 204.7
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, y: 205}, 0).wait(1).to({
            x: 547,
            y: 205.4
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, x: 547.1, y: 205.7}, 0).wait(1).to({
            scaleX: 1.41,
            scaleY: 1.41,
            y: 206
        }, 0).wait(1).to({scaleX: 1.41, scaleY: 1.41, x: 547.3, y: 206.4}, 0).wait(1).to({
            scaleX: 1.41,
            scaleY: 1.41,
            y: 206.8
        }, 0).wait(1).to({scaleX: 1.42, scaleY: 1.42, x: 547.4, y: 207.1}, 0).wait(1).to({
            scaleX: 1.42,
            scaleY: 1.42,
            x: 547.5,
            y: 207.5
        }, 0).wait(1).to({x: 547.6, y: 207.8}, 0).wait(1).to({
            scaleX: 1.42,
            scaleY: 1.42,
            x: 547.7,
            y: 208.2
        }, 0).wait(1).to({scaleX: 1.42, scaleY: 1.42, x: 547.8, y: 208.5}, 0).wait(1).to({
            scaleX: 1.42,
            scaleY: 1.42,
            x: 547.9,
            y: 208.9
        }, 0).wait(1).to({scaleX: 1.42, scaleY: 1.42, x: 548, y: 209.2}, 0).wait(1).to({
            scaleX: 1.42,
            scaleY: 1.42,
            x: 548.1,
            y: 209.6
        }, 0).wait(1).to({scaleX: 1.42, scaleY: 1.42, x: 548.2, y: 210}, 0).wait(1).to({
            x: 548.3,
            y: 210.3
        }, 0).wait(1).to({scaleX: 1.42, scaleY: 1.42, x: 548.4, y: 210.6}, 0).wait(1).to({
            scaleX: 1.42,
            scaleY: 1.42,
            y: 211
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, x: 548.6, y: 211.3}, 0).wait(1).to({
            scaleX: 1.43,
            scaleY: 1.43,
            x: 548.7,
            y: 211.7
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, y: 212.1}, 0).wait(1).to({
            x: 548.8,
            y: 212.4
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, x: 548.9, y: 212.8}, 0).wait(1).to({
            scaleX: 1.43,
            scaleY: 1.43,
            x: 549,
            y: 213.1
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, x: 549.1, y: 213.5}, 0).wait(1).to({
            scaleX: 1.43,
            scaleY: 1.43,
            x: 549.2,
            y: 213.8
        }, 0).wait(1).to({scaleX: 1.43, scaleY: 1.43, x: 549.3, y: 214.1}, 0).wait(1).to({
            scaleX: 1.43,
            scaleY: 1.43,
            x: 549.4,
            y: 214.5
        }, 0).wait(1).to({x: 549.5, y: 214.9}, 0).wait(13));

        // Background
        this.instance_10 = new lib.background();
        this.instance_10.setTransform(417.2, 257.8, 1, 1, 0, 0, 0, 509.9, 291.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({x: 416.4}, 0).wait(1).to({
            x: 415.6,
            y: 257.7
        }, 0).wait(1).to({x: 414.8}, 0).wait(1).to({x: 413.9}, 0).wait(1).to({
            x: 413.1,
            y: 257.6
        }, 0).wait(1).to({x: 412.3}, 0).wait(1).to({x: 411.5}, 0).wait(1).to({
            x: 410.7,
            y: 257.5
        }, 0).wait(1).to({x: 409.9}, 0).wait(1).to({x: 409.1}, 0).wait(1).to({
            x: 408.2,
            y: 257.4
        }, 0).wait(1).to({x: 407.4}, 0).wait(1).to({x: 406.6}, 0).wait(1).to({
            x: 405.8,
            y: 257.3
        }, 0).wait(1).to({x: 405}, 0).wait(1).to({x: 404.2}, 0).wait(1).to({
            x: 403.4,
            y: 257.2
        }, 0).wait(1).to({x: 402.5}, 0).wait(1).to({x: 401.7}, 0).wait(1).to({
            x: 400.9,
            y: 257.1
        }, 0).wait(1).to({x: 400.1}, 0).wait(1).to({x: 399.3}, 0).wait(1).to({
            x: 398.5,
            y: 257
        }, 0).wait(1).to({x: 397.7}, 0).wait(1).to({x: 396.8}, 0).wait(1).to({
            x: 396,
            y: 256.9
        }, 0).wait(1).to({x: 395.2}, 0).wait(1).to({x: 394.4}, 0).wait(1).to({
            x: 393.6,
            y: 256.8
        }, 0).wait(1).to({x: 392.8}, 0).wait(1).to({x: 392}, 0).wait(1).to({
            x: 391.1,
            y: 256.7
        }, 0).wait(1).to({x: 390.3}, 0).wait(1).to({x: 389.5}, 0).wait(1).to({
            x: 388.7,
            y: 256.6
        }, 0).wait(1).to({x: 387.9}, 0).wait(1).to({x: 387.1}, 0).wait(1).to({
            x: 386.2,
            y: 256.5
        }, 0).wait(1).to({x: 385.4}, 0).wait(1).to({x: 384.6}, 0).wait(1).to({
            x: 383.8,
            y: 256.4
        }, 0).wait(1).to({x: 383}, 0).wait(1).to({x: 382.2}, 0).wait(1).to({
            x: 381.4,
            y: 256.3
        }, 0).wait(1).to({x: 380.5}, 0).wait(1).to({x: 379.7}, 0).wait(1).to({
            x: 378.9,
            y: 256.2
        }, 0).wait(1).to({x: 378.1}, 0).wait(1).to({x: 377.3}, 0).wait(1).to({
            x: 376.5,
            y: 256.1
        }, 0).wait(1).to({x: 375.7}, 0).wait(1).to({x: 374.8}, 0).wait(1).to({
            x: 374,
            y: 256
        }, 0).wait(1).to({x: 373.2}, 0).wait(1).to({x: 372.4}, 0).wait(1).to({
            x: 371.6,
            y: 255.9
        }, 0).wait(1).to({x: 370.8}, 0).wait(1).to({x: 370}, 0).wait(1).to({
            x: 369.1,
            y: 255.8
        }, 0).wait(1).to({x: 368.3}, 0).wait(1).to({x: 367.5}, 0).wait(1).to({
            x: 366.7,
            y: 255.7
        }, 0).wait(1).to({x: 365.9}, 0).wait(1).to({x: 365.1}, 0).wait(1).to({
            x: 364.3,
            y: 255.6
        }, 0).wait(1).to({x: 363.4}, 0).wait(1).to({x: 362.6}, 0).wait(1).to({
            x: 361.8,
            y: 255.5
        }, 0).wait(1).to({x: 361}, 0).wait(1).to({x: 360.2}, 0).wait(1).to({
            x: 359.4,
            y: 255.4
        }, 0).wait(1).to({x: 358.6}, 0).wait(1).to({x: 357.7}, 0).wait(1).to({
            x: 356.9,
            y: 255.3
        }, 0).wait(1).to({x: 356.1}, 0).wait(1).to({x: 355.3}, 0).wait(1).to({
            x: 354.5,
            y: 255.2
        }, 0).wait(1).to({x: 353.7}, 0).wait(1).to({x: 352.9}, 0).wait(1).to({
            x: 352,
            y: 255.1
        }, 0).wait(1).to({x: 351.2}, 0).wait(1).to({x: 350.4}, 0).wait(1).to({
            x: 349.6,
            y: 255
        }, 0).wait(1).to({x: 348.8}, 0).wait(1).to({x: 348}, 0).wait(1).to({
            x: 347.2,
            y: 254.9
        }, 0).wait(1).to({x: 346.3}, 0).wait(1).to({x: 345.5}, 0).wait(1).to({
            x: 344.7,
            y: 254.8
        }, 0).wait(1).to({x: 343.9}, 0).wait(1).to({x: 343.1}, 0).wait(1).to({
            x: 342.3,
            y: 254.7
        }, 0).wait(1).to({x: 341.5}, 0).wait(1).to({x: 340.6}, 0).wait(1).to({
            x: 339.8,
            y: 254.6
        }, 0).wait(1).to({x: 339}, 0).wait(1).to({x: 338.2}, 0).wait(1).to({
            x: 337.4,
            y: 254.5
        }, 0).wait(1).to({x: 336.6}, 0).wait(1).to({x: 335.8}, 0).wait(1).to({
            x: 334.9,
            y: 254.4
        }, 0).wait(1).to({x: 334.1}, 0).wait(1).to({x: 333.3}, 0).wait(1).to({
            x: 332.5,
            y: 254.3
        }, 0).wait(1).to({x: 331.7}, 0).wait(1).to({x: 330.9}, 0).wait(1).to({
            x: 330.1,
            y: 254.2
        }, 0).wait(1).to({x: 329.2}, 0).wait(1).to({x: 328.4}, 0).wait(1).to({
            x: 327.6,
            y: 254.1
        }, 0).wait(1).to({x: 326.8}, 0).wait(1).to({x: 326}, 0).wait(1).to({
            x: 325.2,
            y: 254
        }, 0).wait(1).to({x: 324.3}, 0).wait(247).to({alpha: 0.996}, 0).wait(1).to({alpha: 0.993}, 0).wait(1).to({alpha: 0.989}, 0).wait(1).to({alpha: 0.986}, 0).wait(1).to({alpha: 0.982}, 0).wait(1).to({alpha: 0.979}, 0).wait(1).to({alpha: 0.975}, 0).wait(1).to({alpha: 0.972}, 0).wait(1).to({alpha: 0.968}, 0).wait(1).to({alpha: 0.965}, 0).wait(1).to({alpha: 0.961}, 0).wait(1).to({alpha: 0.958}, 0).wait(1).to({alpha: 0.954}, 0).wait(1).to({alpha: 0.951}, 0).wait(1).to({alpha: 0.947}, 0).wait(1).to({alpha: 0.943}, 0).wait(1).to({alpha: 0.94}, 0).wait(1).to({alpha: 0.936}, 0).wait(1).to({alpha: 0.933}, 0).wait(1).to({alpha: 0.929}, 0).wait(1).to({alpha: 0.926}, 0).wait(1).to({alpha: 0.922}, 0).wait(1).to({alpha: 0.919}, 0).wait(1).to({alpha: 0.915}, 0).wait(1).to({alpha: 0.912}, 0).wait(1).to({alpha: 0.908}, 0).wait(1).to({alpha: 0.905}, 0).wait(1).to({alpha: 0.901}, 0).wait(1).to({alpha: 0.898}, 0).wait(1).to({alpha: 0.894}, 0).wait(1).to({alpha: 0.89}, 0).wait(1).to({alpha: 0.887}, 0).wait(1).to({alpha: 0.883}, 0).wait(1).to({alpha: 0.88}, 0).wait(1).to({alpha: 0.876}, 0).wait(1).to({alpha: 0.873}, 0).wait(1).to({alpha: 0.869}, 0).wait(1).to({alpha: 0.866}, 0).wait(1).to({alpha: 0.862}, 0).wait(1).to({alpha: 0.859}, 0).wait(1).to({alpha: 0.855}, 0).wait(1).to({alpha: 0.852}, 0).wait(1).to({alpha: 0.848}, 0).wait(1).to({alpha: 0.845}, 0).wait(1).to({alpha: 0.841}, 0).wait(1).to({alpha: 0.837}, 0).wait(1).to({alpha: 0.834}, 0).wait(1).to({alpha: 0.83}, 0).wait(1).to({alpha: 0.827}, 0).wait(1).to({alpha: 0.823}, 0).wait(1).to({alpha: 0.82}, 0).wait(1).to({alpha: 0.816}, 0).wait(1).to({alpha: 0.813}, 0).wait(1).to({alpha: 0.809}, 0).wait(1).to({alpha: 0.806}, 0).wait(1).to({alpha: 0.802}, 0).wait(1).to({alpha: 0.799}, 0).wait(1).to({alpha: 0.795}, 0).wait(1).to({alpha: 0.792}, 0).wait(1).to({alpha: 0.788}, 0).wait(1).to({alpha: 0.784}, 0).wait(1).to({alpha: 0.781}, 0).wait(1).to({alpha: 0.777}, 0).wait(1).to({alpha: 0.774}, 0).wait(1).to({alpha: 0.77}, 0).wait(1).to({alpha: 0.767}, 0).wait(1).to({alpha: 0.763}, 0).wait(1).to({alpha: 0.76}, 0).wait(1).to({alpha: 0.756}, 0).wait(1).to({alpha: 0.753}, 0).wait(1).to({alpha: 0.749}, 0).wait(1).to({alpha: 0.746}, 0).wait(1).to({alpha: 0.742}, 0).wait(1).to({alpha: 0.739}, 0).wait(1).to({alpha: 0.735}, 0).wait(1).to({alpha: 0.731}, 0).wait(1).to({alpha: 0.728}, 0).wait(1).to({alpha: 0.724}, 0).wait(1).to({alpha: 0.721}, 0).wait(1).to({alpha: 0.717}, 0).wait(1).to({alpha: 0.714}, 0).wait(1).to({alpha: 0.71}, 0).wait(1).to({alpha: 0.707}, 0).wait(1).to({alpha: 0.703}, 0).wait(1).to({alpha: 0.7}, 0).wait(1).to({alpha: 0.696}, 0).wait(1).to({alpha: 0.693}, 0).wait(1).to({alpha: 0.689}, 0).wait(1).to({alpha: 0.686}, 0).wait(1).to({alpha: 0.682}, 0).wait(1).to({alpha: 0.678}, 0).wait(1).to({alpha: 0.675}, 0).wait(1).to({alpha: 0.671}, 0).wait(1).to({alpha: 0.668}, 0).wait(1).to({alpha: 0.664}, 0).wait(1).to({alpha: 0.661}, 0).wait(1).to({alpha: 0.657}, 0).wait(1).to({alpha: 0.654}, 0).wait(1).to({alpha: 0.65}, 0).wait(1).to({alpha: 0.647}, 0).wait(1).to({alpha: 0.643}, 0).wait(1).to({alpha: 0.64}, 0).wait(1).to({alpha: 0.636}, 0).wait(1).to({alpha: 0.633}, 0).wait(1).to({alpha: 0.629}, 0).wait(1).to({alpha: 0.625}, 0).wait(1).to({alpha: 0.622}, 0).wait(1).to({alpha: 0.618}, 0).wait(1).to({alpha: 0.615}, 0).wait(1).to({alpha: 0.611}, 0).wait(1).to({alpha: 0.608}, 0).wait(1).to({alpha: 0.604}, 0).wait(1).to({alpha: 0.601}, 0).wait(1).to({alpha: 0.597}, 0).wait(1).to({alpha: 0.594}, 0).wait(1).to({alpha: 0.59}, 0).wait(1).to({alpha: 0.587}, 0).wait(1).to({alpha: 0.583}, 0).wait(1).to({alpha: 0.58}, 0).wait(1).to({alpha: 0.576}, 0).wait(1).to({alpha: 0.572}, 0).wait(1).to({alpha: 0.569}, 0).wait(1).to({alpha: 0.565}, 0).wait(1).to({alpha: 0.562}, 0).wait(1).to({alpha: 0.558}, 0).wait(1).to({alpha: 0.555}, 0).wait(1).to({alpha: 0.551}, 0).wait(1).to({alpha: 0.548}, 0).wait(1).to({alpha: 0.544}, 0).wait(1).to({alpha: 0.541}, 0).wait(1).to({alpha: 0.537}, 0).wait(1).to({alpha: 0.534}, 0).wait(1).to({alpha: 0.53}, 0).wait(1).to({alpha: 0.527}, 0).wait(1).to({alpha: 0.523}, 0).wait(1).to({alpha: 0.519}, 0).wait(1).to({alpha: 0.516}, 0).wait(1).to({alpha: 0.512}, 0).wait(1).to({alpha: 0.509}, 0).wait(1).to({alpha: 0.505}, 0).wait(1).to({alpha: 0.502}, 0).wait(1).to({alpha: 0.498}, 0).wait(1).to({alpha: 0.495}, 0).wait(1).to({alpha: 0.491}, 0).wait(1).to({alpha: 0.488}, 0).wait(1).to({alpha: 0.484}, 0).wait(1).to({alpha: 0.481}, 0).wait(1).to({alpha: 0.477}, 0).wait(1).to({alpha: 0.473}, 0).wait(1).to({alpha: 0.47}, 0).wait(1).to({alpha: 0.466}, 0).wait(1).to({alpha: 0.463}, 0).wait(1).to({alpha: 0.459}, 0).wait(1).to({alpha: 0.456}, 0).wait(1).to({alpha: 0.452}, 0).wait(1).to({alpha: 0.449}, 0).wait(1).to({alpha: 0.445}, 0).wait(1).to({alpha: 0.442}, 0).wait(1).to({alpha: 0.438}, 0).wait(1).to({alpha: 0.435}, 0).wait(1).to({alpha: 0.431}, 0).wait(1).to({alpha: 0.428}, 0).wait(1).to({alpha: 0.424}, 0).wait(1).to({alpha: 0.42}, 0).wait(1).to({alpha: 0.417}, 0).wait(1).to({alpha: 0.413}, 0).wait(1).to({alpha: 0.41}, 0).wait(1).to({alpha: 0.406}, 0).wait(1).to({alpha: 0.403}, 0).wait(1).to({alpha: 0.399}, 0).wait(1).to({alpha: 0.396}, 0).wait(1).to({alpha: 0.392}, 0).wait(1).to({alpha: 0.389}, 0).wait(1).to({alpha: 0.385}, 0).wait(1).to({alpha: 0.382}, 0).wait(1).to({alpha: 0.378}, 0).wait(1).to({alpha: 0.375}, 0).wait(1).to({alpha: 0.371}, 0).wait(1).to({alpha: 0.367}, 0).wait(1).to({alpha: 0.364}, 0).wait(1).to({alpha: 0.36}, 0).wait(1).to({alpha: 0.357}, 0).wait(1).to({alpha: 0.353}, 0).wait(1).to({alpha: 0.35}, 0).wait(1).to({alpha: 0.346}, 0).wait(1).to({alpha: 0.343}, 0).wait(1).to({alpha: 0.339}, 0).wait(1).to({alpha: 0.336}, 0).wait(1).to({alpha: 0.332}, 0).wait(1).to({alpha: 0.329}, 0).wait(1).to({alpha: 0.325}, 0).wait(1).to({alpha: 0.322}, 0).wait(1).to({alpha: 0.318}, 0).wait(1).to({alpha: 0.314}, 0).wait(1).to({alpha: 0.311}, 0).wait(1).to({alpha: 0.307}, 0).wait(1).to({alpha: 0.304}, 0).wait(1).to({alpha: 0.3}, 0).wait(1).to({alpha: 0.297}, 0).wait(1).to({alpha: 0.293}, 0).wait(1).to({alpha: 0.29}, 0).wait(1).to({alpha: 0.286}, 0).wait(1).to({alpha: 0.283}, 0).wait(1).to({alpha: 0.279}, 0).wait(1).to({alpha: 0.276}, 0).wait(1).to({alpha: 0.272}, 0).wait(1).to({alpha: 0.269}, 0).wait(1).to({alpha: 0.265}, 0).wait(1).to({alpha: 0.261}, 0).wait(1).to({alpha: 0.258}, 0).wait(1).to({alpha: 0.254}, 0).wait(1).to({alpha: 0.251}, 0).wait(1).to({alpha: 0.247}, 0).wait(1).to({alpha: 0.244}, 0).wait(1).to({alpha: 0.24}, 0).wait(1).to({alpha: 0.237}, 0).wait(1).to({alpha: 0.233}, 0).wait(1).to({alpha: 0.23}, 0).wait(1).to({alpha: 0.226}, 0).wait(1).to({alpha: 0.223}, 0).wait(1).to({alpha: 0.219}, 0).wait(1).to({alpha: 0.216}, 0).wait(1).to({alpha: 0.212}, 0).wait(1).to({alpha: 0.208}, 0).wait(1).to({alpha: 0.205}, 0).wait(1).to({alpha: 0.201}, 0).wait(1).to({alpha: 0.198}, 0).wait(1).to({alpha: 0.194}, 0).wait(1).to({alpha: 0.191}, 0).wait(1).to({alpha: 0.187}, 0).wait(1).to({alpha: 0.184}, 0).wait(1).to({alpha: 0.18}, 0).wait(1).to({alpha: 0.177}, 0).wait(1).to({alpha: 0.173}, 0).wait(1).to({alpha: 0.17}, 0).wait(1).to({alpha: 0.166}, 0).wait(1).to({alpha: 0.163}, 0).wait(1).to({alpha: 0.159}, 0).wait(1).to({alpha: 0.155}, 0).wait(1).to({alpha: 0.152}, 0).wait(1).to({alpha: 0.148}, 0).wait(1).to({alpha: 0.145}, 0).wait(1).to({alpha: 0.141}, 0).wait(1).to({alpha: 0.138}, 0).wait(1).to({alpha: 0.134}, 0).wait(1).to({alpha: 0.131}, 0).wait(1).to({alpha: 0.127}, 0).wait(1).to({alpha: 0.124}, 0).wait(1).to({alpha: 0.12}, 0).wait(1).to({alpha: 0.117}, 0).wait(1).to({alpha: 0.113}, 0).wait(1).to({alpha: 0.11}, 0).wait(1).to({alpha: 0.106}, 0).wait(1).to({alpha: 0.102}, 0).wait(1).to({alpha: 0.099}, 0).wait(1).to({alpha: 0.095}, 0).wait(1).to({alpha: 0.092}, 0).wait(1).to({alpha: 0.088}, 0).wait(1).to({alpha: 0.085}, 0).wait(1).to({alpha: 0.081}, 0).wait(1).to({alpha: 0.078}, 0).wait(1).to({alpha: 0.074}, 0).wait(1).to({alpha: 0.071}, 0).wait(1).to({alpha: 0.067}, 0).wait(1).to({alpha: 0.064}, 0).wait(1).to({alpha: 0.06}, 0).wait(1).to({alpha: 0.057}, 0).wait(1).to({alpha: 0.053}, 0).wait(1).to({alpha: 0.049}, 0).wait(1).to({alpha: 0.046}, 0).wait(1).to({alpha: 0.042}, 0).wait(1).to({alpha: 0.039}, 0).wait(1).to({alpha: 0.035}, 0).wait(1).to({alpha: 0.032}, 0).wait(1).to({alpha: 0.028}, 0).wait(1).to({alpha: 0.025}, 0).wait(1).to({alpha: 0.021}, 0).wait(1).to({alpha: 0.018}, 0).wait(1).to({alpha: 0.014}, 0).wait(1).to({alpha: 0.011}, 0).wait(1).to({alpha: 0.007}, 0).wait(1).to({alpha: 0.004}, 0).wait(1).to({alpha: 0}, 0).wait(13));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(214.4, 74.2, 1524, 956.6);


// symbols:
    (lib.tors = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape.setTransform(261.3, 244.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_1.setTransform(261.3, 244.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_2.setTransform(261.3, 244.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_3.setTransform(261.3, 244.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_4.setTransform(261.3, 244.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_5.setTransform(261.3, 244.5);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_6.setTransform(261.3, 244.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_7.setTransform(261.3, 244.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_8.setTransform(261.3, 244.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_9.setTransform(261.3, 244.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape_10.setTransform(243.7, 213);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_11.setTransform(243.7, 213);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_12.setTransform(243.7, 213);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_13.setTransform(243.7, 213);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_14.setTransform(243.7, 213);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_15.setTransform(243.7, 213);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_16.setTransform(243.7, 213);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_17.setTransform(243.7, 213);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_18.setTransform(243.7, 213);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_19.setTransform(243.7, 213);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape_20.setTransform(226.1, 181.6);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_21.setTransform(226.1, 181.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_22.setTransform(226.1, 181.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_23.setTransform(226.1, 181.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_24.setTransform(226.1, 181.5);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_25.setTransform(226.1, 181.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_26.setTransform(226.1, 181.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_27.setTransform(226.1, 181.6);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_28.setTransform(226.1, 181.6);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_29.setTransform(226.1, 181.6);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape_30.setTransform(217, 263.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_31.setTransform(217, 263.8);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_32.setTransform(217, 263.8);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_33.setTransform(217, 263.8);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_34.setTransform(217, 263.8);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_35.setTransform(217, 263.8);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_36.setTransform(217, 263.8);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_37.setTransform(217, 263.8);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_38.setTransform(217, 263.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_39.setTransform(217, 263.8);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape_40.setTransform(199.4, 235.6);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_41.setTransform(199.4, 235.6);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_42.setTransform(199.4, 235.6);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_43.setTransform(199.4, 235.6);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_44.setTransform(199.4, 235.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_45.setTransform(199.4, 235.6);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_46.setTransform(199.4, 235.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_47.setTransform(199.4, 235.6);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_48.setTransform(199.4, 235.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_49.setTransform(199.4, 235.6);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("rgba(255,255,255,0.698)").s().p("AgyAzQgVgVgBgeQABgdAVgVQAVgVAdAAQAeAAAVAVQAVAVABAdQgBAegVAVQgVAVgeAAQgdAAgVgVgAgwgwQgVAUAAAcQAAAdAVAUQAUAVAcAAQAdAAAUgVQAVgUAAgdQAAgcgVgUQgUgVgdAAQgcAAgUAVg");
        this.shape_50.setTransform(181.8, 204.6);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("rgba(255,255,255,0.596)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgygyQgVAVgBAdQABAeAVAVQAVAVAdAAQAeAAAVgVQAVgVABgeQgBgdgVgVQgVgVgeAAQgdAAgVAVg");
        this.shape_51.setTransform(181.8, 204.6);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2A2QgWgWAAggQAAgfAWgWQAXgXAfgBQAgABAXAXQAWAWAAAfQAAAggWAWQgXAXggABQgfgBgXgXgAg0g0QgWAWAAAeQAAAfAWAWQAWAWAeAAQAfAAAWgWQAWgWAAgfQAAgegWgWQgWgWgfAAQgeAAgWAWg");
        this.shape_52.setTransform(181.8, 204.6);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("rgba(255,255,255,0.396)").s().p("AAABQQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAIAAAAgAg2g1QgWAWAAAfQAAAgAWAWQAXAXAfABQAggBAXgXQAWgWAAggQAAgfgWgWQgXgXgggBQgfABgXAXg");
        this.shape_53.setTransform(181.8, 204.6);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("rgba(255,255,255,0.294)").s().p("AAABSQghABgYgZQgZgYAAgiQAAghAZgYQAYgZAhABQAigBAYAZQAZAYAAAhQAAAigZAYQgYAYgiAAIAAAAgAA5A4QAXgXAAghQAAgggXgXQgYgYghAAQggAAgXAYQgYAXAAAgQAAAhAYAXQAXAYAgAAQAhAAAYgYg");
        this.shape_54.setTransform(181.8, 204.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("rgba(255,255,255,0.196)").s().p("AAABVQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAIAAAAgAA6A6QAZgYAAgiQAAghgZgYQgYgZgiABQghgBgYAZQgZAYAAAhQAAAiAZAYQAYAZAhgBQAiABAYgZg");
        this.shape_55.setTransform(181.8, 204.6);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("rgba(255,255,255,0.094)").s().p("AAABYQgjAAgagaQgagaABgkQgBgjAagaQAagaAjAAQAkAAAaAaQAaAagBAjQABAkgaAaQgaAZgkABIAAAAgAA8A8QAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZQgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZg");
        this.shape_56.setTransform(181.8, 204.5);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("rgba(255,255,255,0.796)").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVgAgvguQgTATgBAbQABAcATATQAUAUAbABQAcgBAUgUQATgTAAgcQAAgbgTgTQgUgUgcgBQgbABgUAUg");
        this.shape_57.setTransform(181.8, 204.6);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("rgba(255,255,255,0.898)").s().p("AgvAvQgTgTgBgcQABgbATgTQAUgUAbgBQAcABAUAUQATATAAAbQAAAcgTATQgUAUgcABQgbgBgUgUgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
        this.shape_58.setTransform(181.8, 204.6);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
        this.shape_59.setTransform(181.8, 204.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#000000").s().p("AHjZvQkOgWgnABQkQANhcgyQgIgFgHgGQg5AdgZAAQhAAAiBj1QgTgmgUgpQgKgMgJgOQgPAHgPAAQghAAgkg7QBDCEgBAKQABAcgRAYQA2BVAAAbQAAAsgVAbQgeAmhEAAQhbAAh3jeQgVgkgWgsQglhHglhUIgag8IgGAAQgUAAq0y6QABARgCAGIgDALQALAfADAfQAeC0AIBcQAHBXAHCOQAKANAIAOQAeA4AQBWIASB3QAuBKAtBfIAAAEIAOAUIAAAAQBcBbAkAAQAaAAAZAvQAVAmAAALQAAATgJANQA1AnBFAwQCSBlAvAnQBTBEAAAlQAAA8hdAAQg1AAhkgXQAJANAAAKQAAAVgOARQgTAZglAAQgrAAiIhBQiLhCikhjQmej5iljHQgzg9gjkfIgBgIQgOgLgHgUQgIgygDgKIAAj0QgOhAgGgqIg5ldIgRh2QAQgbAIgmQAHgogCg2IgFg6IgBhlIAAgBQgIgRgDgUIAAgTQAAgtBCg7QA9g3Bmg1QC6hhCTgSQBAgfA9gbQCohIA/gDIACgEIAAgSQAAgOAKgcQAKgdAMgSQAhgyAABaQAAAgAGAyIAAACIAFApQACARAAALQAtgCB4BYQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAKAJAGIAfASIAaARIAXALQAhAVApAcIgBgDIAAgqIAAghIABggQADgYABgDIAEgLIAEgiQgDg9AlgIQAIglA4AYQARAHApAWQAiATAOAFICCAUQAxisAAgRQAAgagahEQgPgngGgaQgJACgOAAQgVAAgCgGIADgHQgRgEAAgLQAEgNgBgGQABgFgEgGQgDgGAAgJQAAgMATgMIACAAQAGgMAigLQALgtA1AZIAHAEQAngHA1gGIBBgHQAJgHANAEQAngUBzgcQDBgtEYgfIAKATQAXgFAqARQBPAfB/BiQByBZBcBdQBLBNAPAkIAnAlQBJBJBGBZQAfAnARAYQAMAFAPAIQAPAIAPAKQAGAAAJACQAmALA8A/QA4A9ApBHQAOAZAKAWIAJADIGOAAQA5AIAkANQBXgGBwAHQBZAFBMANIAHgBQAKgCANgBQAYgMAcgFQBpgSA1BvIAMAVQAvA5AtBYQAcA0AbBAIAAAHQANAXAAAUQAAAggEgCIgHAHQgIAHgSAAQgDAAgOgQIACALQgQAFgUAAQiaAmjSAAIgagBQhkAsi8gEIoEAAQixgghkgsQhAgcgugoQgsgihJhLIgQgSIgCAAQgoAAkmkmIhuhxIgBAAIgCAAIAABQQAAB2AGBQQAJB1AZBYQAPAyCGFDIApBtQAPAIATARQAoAkApBAQAlA7ALAiIBGDSQArCCAAAJQAAAXgLAUIBACNIBCCRIAZAYQC0C0CzDwQgBBniEAAQg/AAhShhIgPAEQggAKghAHQAFAJAAAIQAAAogdAaQghAfg/AAIkIgXgAwaGcQALAUALAZQAgAwAgBTIAaBDIBkCtQA1BaBrDQIACAFIgVg1QgsiHgbhOQglgQgTgQQgVgTgGgdQgEglgFgXQgJgqgZgoQgXgmgFhPIgRggQgfg9gTgoIgGgFQgGgIgBgJQgKAKgJAAIgJAAQgKARgKAOgA8WNvIADAAIgDgGgAGjLHIADgCIgKgXIAHAZgApt2qIAvAwQBOBTBEBfQBDBcAAAUQAAAhgtA4QgMAPgOAMIABAIQAAAEgPAOQgUATgQAYQBIAxBJAnQAVAOAIAOQAIAPAAAaIgBAGIABAKQAAA2iRDJQhMBmhcBzQgSAZiYDqIhHBqQgYBkgeAaIgGAOIgcA8IABABIACADQBYhsBviVQEymWDimHQgjgfgrgeIg9goQg2gmAAg0QAAgeASgaQATgZAzgoQgfhCh5iuIgYghQgVgIgOgLQgVgSAAgcIAAgIQgMgHgKgIIgNgNIgpADgAuHhcIADAKIACgOIgFAEgA2upgQAKAcgGAsIgJA2IA/AuIAaAMIDJBVQDpBoAuBGIABgcIAAgDQgugahdhTIglgiIgCABIgGADIgDAAQgigOgtgaQhog6gIgBQh5gQgeghQgKgMAAgRIABgaQAAgkAPgdQAPgdAAgUIgBgQQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAgBAAgBQhUACg5gFQBEAXASArgEgjbgJIIgFAGQBFARBeA7QBXA3BGBCQAOgGARAAIACAAQgagjgQgMIjkiIIgsgbIgiANgA4XosIAAgDIgFgBIAFAEgAoyqGIACgCIgDAAIABACgA59slIgwBqQAsACAlAEIgMgGQgTgMgCgRIAAgdQAAggAnhYQgMAAgIgDQgEAngPAkgAw1srIArAfIAAgEIABgYQgRgBgNgGIgBAAIgNAEgAtHugQAAAhgtAkIAaANIASAKQAOg3AVhHIgogJQAGAUAAAXgABz4AQgJAKgQAFIAKAFQAfASAAAfQAAAXgUASIARA4QAgBSA8DGQAuCSAMA0IALAJQgaheggiXIhImCQgXgQgQgOIgFAIg");
        this.shape_60.setTransform(246.8, 167);

        this.addChild(this.shape_60, this.shape_59, this.shape_58, this.shape_57, this.shape_56, this.shape_55, this.shape_54, this.shape_53, this.shape_52, this.shape_51, this.shape_50, this.shape_49, this.shape_48, this.shape_47, this.shape_46, this.shape_45, this.shape_44, this.shape_43, this.shape_42, this.shape_41, this.shape_40, this.shape_39, this.shape_38, this.shape_37, this.shape_36, this.shape_35, this.shape_34, this.shape_33, this.shape_32, this.shape_31, this.shape_30, this.shape_29, this.shape_28, this.shape_27, this.shape_26, this.shape_25, this.shape_24, this.shape_23, this.shape_22, this.shape_21, this.shape_20, this.shape_19, this.shape_18, this.shape_17, this.shape_16, this.shape_15, this.shape_14, this.shape_13, this.shape_12, this.shape_11, this.shape_10, this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 493.5, 334.1);


    (lib.tears = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#5AD3FE").s().p("Aq4UQQgoiiAAgRQAAhJAYANQAVALAgBEQAdA+AXBJQAYBMAAAiQAAArgDALQgJAlgnAAQgTAAgriwgAJ7QnIAAgxQABgpAQgdQAOgbAVgEQAUgEAOAXQAQAbAAA3IgBA7QgHArgqAAQgrAAgJg1gApNJUQgGgMgBgRQABgXARgQQARgPAWgDQAYgCAQALQARAOABAbQgBA9g5AAQglAAgNgZgAH9EtQhainAAAEQAAhFAkAHQAgAGAvA8QAuA6AhBLQAjBSAAA8QAAAWgTAQQgQAOgPAAIhZiogAn6hCQgNglAAgVQAAggASgMQAQgKAXAJQAXAIAQAWQASAYAAAcQAAAegDAJQgKAjgmAAQgfAAgTg1gAF+luIgOhIQAAgqAUgIQASgIAbAVQAZAUASAjQAVAnAAAnQAAASgQAPQgQAQgUAAQgoAAgXhJgAmbq7QgGgNAAgRQAAgYASgyQASg0AUgfQAZgjAPAPQASATAABcIAABEQgJA1gxAAQglAAgNgZgAEOr1IgEgsQABgvARgQQAQgPAZANQAWAMARAcQASAfAAAhQAAATgRAPQgQAPgTAAQgvAAgNgsgAk80IIgMhbQgBhRATgKQAOgIAZAoQAVAiASAzQASAxAAAUQAAArgDAKQgKAjglAAQggAAgUhcgADM0IIAAg2QAAiKA5BIQAVAaASAqQASAoAAAQQAAATgPAQQgQAPgVAAQgzAAgLg2g");
        this.shape.setTransform(73.8, 147.3);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 147.5, 294.6);


    (lib.sunAlternative = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF00").s().p("AkZfFQDhi3CZj7QAuhJBwjUQBciqBDhcQAHAEALABQAHACgBAUQAACYl9HcQhyCRiSCoIgLANgASfPRQhNhQhFhbQg7hNgSgjQAGgFAKgFQAKgEgBgCQAqAoBJBTQBSBhAoAoQChCmC7BGQgCALgDAGQgGAJgUAAQiMAAjYjfgAzVSfQCIhcD5iLQC3hmCshZIAJATQhbBSj2CJQi0BljPBkQgQgGgJgLgAj0L5QkVichplnQgyisgLjzIg1geIhkg4QlijLlDjCQBxAeCzBZQBXArBnA5IBhA2IDEByIA1AfIgBhUQgDhmAPhkQAejGBaAAQAQAAAAAMQAAANAQAAQACAACNhnIArgdIgjgiIgTgRQnQm7jkjmQBAAIDXC4QB2BlDWDCQBMBGBTBPIAtAsQBOguAxgRIG+ADQHHg7CeEUQBCBzAYC6QASCIAADmQAAD0iYDAQjlEhoRBRgAk8CTQgDAIgCABQgBACAAATQAAAUAzA3QA1A5BGA2QC5CPBhgfIEkAAQAtgZA/hkQA6hdAAgYQAAgTgHgDQgMAAgIgDQg6AWgWBHQgPAwgGAMQgPAhgaAXIknAAQitgchmhbQgZgXgyg4QgtgygegZQAAADgTAAgAESh7QghAHgSAOIAABMIAQADQAVADAUAAQApAAAKgMQAGgIAAgkQAAghgDgSIgQgBQgVAAgXAFgAiKjKQghAeAAAdQABAOASAZQAaAiAnAAQApAAAKgWQAHgMgBg0QAAgqgDgSQgYgJgVAAQgiAAgaAXgAH+nyQhgChAAApQgBAVAHAGQACADAQAGQDlljAAgiQAAgVgGgEIgTgHQgkAZhgCegAmop4QAPAIApA3IBTBxQB3CdA2AAQATAAAHgLQAEgGABgLQgkgrgvhHQg0hQgRgWQhPhohwgPgA5tDrQjZg5g/g4QBWAIDgAzQC3ApCPAWQArAGAoAFIBUAAIEQAAQA5gJBzAAQAUAHAFASIgJAaIgBAAQhWACiHAGIiDAFQlZAAkdhLgAZihAQgzgchLgvQhcg5hGgwQhGgwgxgnIACgZQAyANC/BwQBuBABOA0IAlAZQAlAaAcAXIgCAOQgDAHgUAAQgVAAhQgsgASBurQgFgCgKgKQBmg8CahyIBvhVIAlgZQDAh/C3gjIAJASQgZAMhtBKIjeCXQg4AlgwAeQiKBYhNAhQgtATgYAAQgVAAgIgEgAiB14QgCgsAAieQAAg9gSiWQgHiBAyguQASAHAHASIAALcIgIAGQgIAHgJADQgShJgFhwgAK00jQgJgJgDgTQgDgTACgXQABg/B+i+IANgTIB4iuIAuhEQAQAMAFALQAFALAAAYQgBA/grBCQgYAihJBQIgHAJQg9BCgYAsQgoBGAFBIIgGAYQADACAAADQgCAEgUAAQgQAAgKgLg");
        this.shape.setTransform(192.7, 198.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("Akhb9QgHgGAAgVQA8h5BFiWQCMksAwidQAPAMAGARQAEANAAAbQAAAzh6EcQiDErhAA9QgQgGgCgDgAOHRlQiiiKhvg5IAAgcQCCAbCgCMQAsAnBYBSQBPBHA7ApQgHATgSAHQhVgzixiYgA0LRhIAAgEIgKgKQBKg9CghoQCAhUBthAQARAHAJARQgtA4jOCAQjBB5gUAAQgTAAgEgCgAnAOzQkqiQh3l6IAAAAIAKgaQgGgSgTgHQg0i/gKj+IA1AeQALDyAyCtQBoFnEWCcIFnAAQIPhRDlkhQCYjAAAj2QAAjkgSiIQgZi7hBhyQifkUnGA7Im+gDQgyAQhNAvIgtgsQBOgkBegkIGtAAQIOhACsFqQA/CDATDGQAJBiAADTQAAEIiYDGQjuE0o/BigAleHrQhHg3g0g4Qgzg3AAgVQAAgSABgCQACgBADgIQATAAAAgDQAeAYAtAzQAyA4AZAXQBmBbCuAcIEmAAQAagXAPghQAGgNAPgvQAWhIA6gVQAIADALAAQAIADAAATQAAAYg6BcQhABlgsAZIkiAAQgRAFgUAAQhdAAiah1gA2AF/QgogFgrgGIAAgIQHEhWAuAAIAGgDQAFACAAAUQAAAgjlAmIhxAQgAAlBnIgQgDIAAhMQASgPAhgGQAggFAcACQADARAAAhQAAAkgGAIQgKAMgqAAQgTAAgVgDgATNgSQjahbAAgWQAAgUACACIACAEQAngEBaAgQBGAxBcA5QBLAsAzAdQgzgSiYg+gAliAWQgTgXAAgPQAAgcAhgeQAqgmA/AXQADATAAAqQAAAxgGANQgKAWgqAAQgmAAgagigAkrglQgCAEgGAKQgGAJgCAFQAmgOgBgDQgMgEgJgKgAWwALIAeANIAGAMIgkgZgAuwiJIAAg2QAAiUAFgrQAMhdAvhDQBHhkDVhqIASARIAkAiIgsAdQiMBmgDAAQgPAAAAgMQAAgMgQAAQhagBgeDHQgPBjACBmIABBUIg0gegADaiNQgHgGAAgWQAAgoBhihQBgieAkgZIASAGQAHAFAAAUQAAAjjlFiQgQgGgCgCgAnnlIIhThyQgpg2gPgJIAAgdQBvAOBQBoQARAXA0BQQAvBHAkArQgCALgDAGQgHAKgUAAQg2ABh2idgAy7kkIgagOQhng4hXgrIAAgcQA1gNCXBUQCtBgBHAMIAEAGQAEAHACAHQgJAZglAAQglAAifhTgAvLvXIjKjhQBmAnCCCMQBIBOBzCPQgFASgUAJQhUhShsh4gAQZs7QBMggCLhYIgXASQhHAzhrA6IgOgHgAG+vdQgGgCAAgTQAAgbAyiWQAKALAQAAQAUAAABgFQABgCgDgDIAGgXQgGhIAphHQAYgrA9hCIgkBjQh1E+grA7QgOgCgFgCgAUyxYIAKAEIgmAaIhuBUQBShKA4gogAhr38QgEhLAGiQQAAgUAIgGQACgDAPgDQAbAkAPCRQAJBfAAA/QAAA5gDAmIgHAEQgIAFgHABQgug7gHiGgALP8GQAPAIAEAEQAGAIAAAVQAAASgIAkIh3CtIgNATQBAirAzh0g");
        this.shape_1.setTransform(212.9, 186.2);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 385.3, 397.9);


    (lib.presents = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("PRESENTS", "120px 'IceCream'");
        this.text.lineHeight = 122;
        this.text.lineWidth = 526;

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 529.7, 122.1);


    (lib.iseCUbesHand = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("AATHFIAAgCIgBgBIAAAAIgDABQgSAAgNglIgGgbIgDAAQgFAAgCgFIgBgFIAUgbIAGgGIAAgBIAAgFIgBgCQgHAAgEgEQgEgEAAgEQAAgDAFgDIgLgVIgWgWQgUgUAAgHQAAgMAGAAQACgGAGgDQAIgFAZgGIAOgEQAMgDACgCIAHgFIgGgEIABgDQABgIAHABQAAgIAEAAIAPABIAKABQACAAASgXIAEgFIAGgIQAAgCgEgJIgFgHIgFgIQgEgKgBgEIACgHIgGAEQgFAAgDgEIgBgCIAAgCIABgFIAAAAQgIAAgHgJIgEgIQAAgJAHAAIADABIAAgBIAAgFIgEABQgFAAgHgEQgIgIgFgCIgGgDQgWABgCgCQgDgCgBgCIAAgEIABgEIgIACQgKAAAAgJIgTANIgNAHQgKAAgQgKIgCgBIgJgFIgCADIgBADQgEADgEAAIgDgEQgKgLgcgsQAAgRALAFIA0gsQAXgRAOgGIgEgFQgFgHABgDIAAgCQgEgFgHgTIgKgaQABgNAEAAQABgFAQgCIALgGIARgLQANgGAEAEQACgNALAKQAHAFAJAMQANAUAOAZQgeAjgYAPIAPACIADABIAAgBIAggjQAMgMAHgEQAJgLAvgdQAcgRAPgFQgHgEgRgOIAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAMgXAPQgXAPgbACIAAADIAAAFQAEAHABADQgBALgIAAQgFAAgtg7IABgFQABgJAIADIgBgBQABgMAzgTQAXgIANgBQADgJAPAKQAHADAIAHQAQAOAQAUIgBAGQADAAAAAEIgBADIABAEQAAADgdAXIgMALQAHgBASASQAYAXAGALIABAEQAAAJgIAAQgCAAgFgFQgBAHgKAHQgOAIgGAGIgHARQgCAHgEADIgIADIACAEQAAADgCADQgDADgDAAQgDAAgHgGIgRAKQAdApAAAJQAAAIgFABIABAGQAAAEgJAHIgSAQIgCAGIACgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQADgBAFABQAMADAYAOQAgATALAJQAGAEgBACQABAIgIAAIgCAAQgEAAgKgEQAAAKgMAAQgFAAgJgEIABAFQgBAJgCAGIANgKQAcgVAAAPQAAADgTARQgWASgHANQgGALgKAOQALAEAIAHIAFAEQAYANAEASIAEAPIALAhIADAMQAAACgCADQgEADgCAAIgCAAQgGgCgIgMIgEgHIAAABQAAAFgEACIAUAUIACACQAAAEgCACQgDACgFAAQgHAAgMgKIgEAEQANAAADAQQAAAFgfAaIALAHQAfAWAAAGQAAAJgJAAIgDAAIAAAAIgQANQgXARgUAAQgFAAgDgCQgFAEgCAAQgFAAgCgFIgBgBIAAgHQAAgEABgDIgPAQQgGAFgBAAQgHAAgBgEgABRGxIARgHQAAgDgFgFIgMAPgAAJGrQABABAAAAQAAABABAAQAAABABAAQAAAAABABIABAAIgGgIIABAEgABTGDIACACQAAAHgGACIgVAbIgFAFQAPgIAIgHQADgCABgHQACgGADgBQAFgDADABIgKgLgAAXGSQAEAIACACIAEgEIgGgFIgEgCIAAABgAgDFvQAFACAKAFQAmAUAAAMIgBAFIABgCQADgCAKgOIgEgCQgEAEgGAAIgxgiIgDAGgAA9FmQgEADgGAAIAUAQIgBgCQgFgIAAgCIADgJIAAgCIgHAEgAAXFYQAIADAMAJIgBgGQgHAAgEgDQgDgDAAgCIgFACgABRFAIgFACIAMgBQAEAAADgCIALgBIgMgMQAAAKgNAEgAALEoQgKAIgEACIACAEQALgEARgFQAbgHAggGIgGgLQgBADgZAKQgZALgKAAQgFAAgCgFIAAgBIgBABgAB9EkIAAABIABABIgBgCIAGgJQAAgXgdgXIgYgQIgEAGIAHAMIAKAQIgDgIQAAgcATAeQASAeAAAJIAAAEIAAAAgAgOEiIADAEIAEgGIgHACgABOEQIgFgJQgBAEgHAEIAEgBQAGAAADACgAgtD0IgCADIAHAHIgBgCIAHgOIgLAGgAAdDmQADAAAOAEIAQAHIgEgKIgCAAQgDAAgcgTQgGAKgkAJIAFAGQAGAAAGgFQAEgEACAAQAKAAANACgAA7DWIAAgBIACgDIgOgFIAMAJgABIBWQAFABAFAGIAEAEQAJABAKAEIgDgCIgagSIgEAEgAArApQABADACABIABAAQAAABABAAQAAAAAAAAQAAgBAAAAQABgBAAgBIgEgDIgDgCIABADgAAvAVQAVAMADAGQANgLAFABIgCgCIgCAAQgQAAgjgOIgFgCIASAKgAh0AAIADAIQACAFAIACIABgFQgGAAgCgFIAAgFIgBAAgAg/hJQAFAXAVAaQAKAOAKAKQAAABgSANIAUgJQAMgFAHAAIgEgCIgCABQgCAAgQgSIgVgWIgNgVQgHgQgBgCQAAgDACgCIgBAAIgCAAIgnAZIgGAFIAGgEQAcgSAIAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAABgABKAHIgMgOQgBAHgLAAIgFAAQAKADATAEgAAOAFIAGACIgGgDIAAABgAiTgYQAEAGAFAJIABADIgGgPQAAgEAFgFIgJAGgAAGgbIACAAIgDgIQgCgGgDgBIAGAPgAhJglIADADIACgHIgCgDgAAFhbIAIABQAYAIgBAIQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAIAGAPAUIAQgHIgJgJIgZgZQAAgPAPAJQAGgPAfgcQAKgLAJgFIgEgEQAAgEABgDIgVARQgHAOgLAMQgUAZgUAAQgHAAgEgGIgBgCIgMAJgAgxhXQAEACAEAHQABAGAKAQIAHAIQgTgigBgCQAAgHAEAAIAAgBIgKAFgAgThOIAOAbIACAAQgIgRAAgFIABgEIgKgEIAAAAIABADgAANg9IADgFIABgBIgHgCIADAIgABihIIAEAEIgBgJQgDADAAACgABGhOIACABIAGAFIACgFIADgHQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgBgDIgKAMgAg4iHIABAIIAGgIIgBgEIgGAEgAgBifQABAFgDADIgJAHQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBIAFgBQADAAADACIAFgEIgJgMgAg8ibIAAACIAFgDIgFABgAgUisIAOAFIgIgLIAAAAIgGAGgAAZjDIABgFQgDgCgEAAIAGAHgAAIjVIADACIAAgDIgDABgABXjxIgBABIACACIALgEIADAAIgEgDIgLAEgAAIkXIAAAAIgBABIgFABIgCAAIAAgBIgEABIgCgBIgCABQgHAAgDgEIgngLQgQgDgEgGQgDgDAAgIIABgLIAAhBQACgQAHgBQACgFAJAAQADgJAjgXQAagRAIAEQALgBASAEQAhAHAIAFQAHgDAAAMQAEAEAAAEIABAoIAAAMIgBATQgFAbgNAAIgIAHIAAAAQALADACAHIAAAEQABAKgJAAQgDAAgFgFIgEADIgCABQAAAEgIAFQgJAGgKAAIgHgBIgDgDIAAgEIgGAIIgCADQgEAAgCgCgAg/k2IACAAIgBgEgAATl6IADAOIAAALQgBAVgCANQAMgYABgXIAAgEQAAgKgSgFIAFAHgAAulRIACgEQADgGAAgEIgCgGIgDAUgAg+luIAFgCQgDgCgBgEIgBgCgAAxlyIAAgCIAAAAIAAACgAg+l+IAAAFQABgOAoABIARACQAEABAEACIACgCIgGgCIgTgCQgZgCgNgDIgFAOgABNmHIABAAIAAgBIgBABgAAnmPIACgDQgGAAgEgEIgpAAIAkAEIADAAQAGAAAEADgAglmZIAZADQgDgBgCgDIAAgFQAAgCAPgMIANgMIACgBIgEgBIguAigAA+mrIAAACIAEgEIgEAAIAAACgAAomvIADAAIgEgBIABABg");
        this.shape.setTransform(17, 45.7);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 33.9, 91.5);


    (lib.heatEscape = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("HEAT ESCAPE", "150px 'IceCream'");
        this.text.lineHeight = 152;
        this.text.lineWidth = 769;

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 772.6, 151.6);


    (lib.Head = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,102,255,0.094)").s().p("AiyCUQgXAAgRgKIgEgDIgDgCIgIgHQgXgXAAggQAAggAXgXQAGgGAFgEIADgBIABgBIAMgEQANgFAPAAQAOAAAOAFIAEAAQAMAGAKAKQAIAHAEAIQALASAAAWQAAAOgEAMQgGAQgNANIgIAHQgGAFgIADQgMAGgOABIgGAAgAjGAAQgJAAgHAFIgEACIgEACIgKAJQgWAWABAfQgBAfAWAWIAKAIIABABIADACQARALAXAAIAGAAQAOgCAMgFIAKgGIALgJQAMgMAFgPQAFgMgBgOQABgWgLgSQgFgHgGgGQgKgKgLgFIgNgDQgJgCgKAAQgLAAgJACgAC0AGQgXAAgRgJIgEgCIgDgDIgIgHQgXgXAAggQAAggAXgWQAGgGAFgEIADgCIABAAIAMgGQANgFAPAAQAOAAAOAFIAEACQAMAFAKALQAIAHAEAIQALARAAAWQAAAOgEAMQgGAQgNANIgIAHQgGAFgIADQgMAEgOACIgGAAgACgiOQgJACgHAEIgEACIgEADIgKAIQgWAWABAfQgBAfAWAWIAKAJIABAAIADACQARAJAXAAIAGAAQAOgBAMgEIAKgGIALgJQAMgMAFgPQAFgMgBgOQABgWgLgRQgFgHgGgHQgKgJgLgFIgNgFQgJgDgKAAQgLAAgJADg");
        this.shape.setTransform(92.6, 102.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(0,102,255,0.396)").s().p("AiyCNQgSAAgPgIIgHgEIgEgDIgGgGQgUgUgBgdQABgdAUgUIAGgGIAEgDQAIgFAIgDQALgEANAAQARAAAPAIQAJAFAIAIIAIAJQANASAAAWQAAAOgFAMQgGANgKAKQgIAIgIAFIgBAAQgMAGgOACIgGAAgAjBAFQgNADgMAIIgEADIgEAEQgUAUAAAcQAAAbAUAUIAEAFIAEACQAGAFAHADQAMAFAPAAIAGAAQAKgBALgEIAFgDQAIgFAHgHQAKgKAFgLQAFgMAAgOQAAgXgNgRIgHgIQgHgHgIgEQgPgJgRAAQgIAAgHACgAC0AAQgSAAgPgIIgHgEIgEgDIgGgFQgUgVgBgdQABgcAUgVIAGgGIAEgCQAIgGAIgDQALgEANAAQARAAAPAIQAJAFAIAIIAIAKQANARAAAWQAAAOgFAMQgGANgKALQgIAHgIAFIgBABQgMAGgOABIgGAAgACliIQgNADgMAJIgEADIgEAEQgUAUAAAbQAAAcAUAUIAEAEIAEADQAGAEAHADQAMAGAPAAIAGAAQAKgCALgEIAFgDQAIgEAHgHQAKgKAFgMQAFgMAAgOQAAgWgNgRIgHgIQgHgHgIgFQgPgIgRAAQgIAAgHABg");
        this.shape_1.setTransform(92.6, 102.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(0,102,255,0.698)").s().p("AiyCFIgJAAQgRgCgOgMIgEgDIgBgBQgSgTAAgZQAAgTAKgPIAFgGIADgEIABgBIAEgDQARgPAXAAIAGABQAOABAMAIQAGADAGAGIAEAEQAOARAAAXQAAAOgGAMQgEAJgIAJIgMAJQgLAHgNACIgCAAIgGAAgAjaAaIgDADIgBAAIgBACQgFAFgDAGQgIANAAAQQABAYAQARIABABIADADQARAPAXAAIAGAAQAOgCAMgIIAKgIQAIgIAEgIQAFgMABgOQAAgXgPgRIgDgCQgFgFgFgDQgMgIgOgCIgGAAQgXAAgRAPgAC0gHIgJgBQgRgCgOgLIgEgEIgBgBQgSgSAAgaQAAgTAKgOIAFgGIADgFIABgBIAEgDQARgOAXAAIAGAAQAOABAMAIQAGAEAGAFIAEAFQAOARAAAWQAAAOgGAMQgEAKgIAIIgMAKQgLAGgNACIgCABIgGAAgACMhyIgDACIgBABIgBACQgFAFgDAFQgIANAAAQQABAYAQASIABABIADACQARAPAXAAIAGAAQAOgCAMgHIAKgIQAIgIAEgJQAFgMABgOQAAgWgPgRIgDgDQgFgFgFgDQgMgIgOgBIgGgBQgXAAgRAQg");
        this.shape_2.setTransform(92.6, 102.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(0,102,255,0.596)").s().p("AiyCIQgLAAgJgDQgLgEgJgHIgEgDIgCgCQgTgUAAgaQAAgWAMgQIABgCIAGgGIACgCIAEgDQARgOAXAAIAGAAQAOABAMAIQAHAEAGAGIAGAGQANARAAAXQAAAOgEAMQgGAKgJAKIgNAKQgGAEgHACIgNADIgGAAgAjaAXIgEADIgBABIgDAEIgFAGQgKAPAAATQAAAZASATIABABIAEADQAOAMARACIAJAAIAGAAIACAAQANgCALgHIAMgJQAIgJAEgJQAGgMAAgOQAAgXgOgRIgEgEQgGgGgGgDQgMgIgOgBIgGgBQgXAAgRAPgAC0gFQgLAAgJgDQgLgDgJgHIgEgDIgCgDQgTgTAAgbQAAgVAMgRIABgBIAGgGIACgDIAEgDQARgOAXAAIAGABQAOABAMAHQAHAEAGAHIAGAGQANARAAAWQAAAOgEAMQgFALgKAJQgGAGgHAFQgGADgHACIgNADIgGAAgACMh2IgEADIgBABIgDAFIgFAGQgKAOAAATQAAAaASASIABABIAEAEQAOALARACIAJABIAGAAIACgBQANgCALgGIAMgKQAIgIAEgKQAGgMAAgOQAAgWgOgRIgEgFQgGgFgGgEQgMgIgOgBIgGAAQgXAAgRAOg");
        this.shape_3.setTransform(92.6, 102.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(0,102,255,0.498)").s().p("AiyCKQgPAAgMgFQgHgDgGgFIgEgCIgEgFQgUgUAAgbQAAgcAUgUIAEgEIAEgDQAMgIANgDQAHgCAIAAQARAAAPAJQAIAEAHAHIAHAIQANARAAAXQAAAOgFAMQgFALgKAKQgHAHgIAFIgFADQgLAEgKABIgGAAgAjaAUIgEADIgCACIgGAGIgBACQgMAQAAAWQAAAaATAUIACACIAEADQAJAHALAEQAJADALAAIAGAAIANgDQAHgCAGgEIANgKQAJgKAGgKQAEgMAAgOQAAgXgNgRIgGgGQgGgGgHgEQgMgIgOgBIgGAAQgXAAgRAOgAC0gCQgPAAgMgGQgHgDgGgEIgEgDIgEgEQgUgUAAgcQAAgbAUgUIAEgEIAEgDQAMgJANgDQAHgBAIAAQARAAAPAIQAIAFAHAHIAHAIQANARAAAWQAAAOgFAMQgFAMgKAKQgHAHgIAEIgFADQgLAEgKACIgGAAgACMh5IgEADIgCADIgGAGIgBABQgMARAAAVQAAAbATATIACADIAEADQAJAHALADQAJADALAAIAGAAIANgDQAHgCAGgDQAHgFAGgGQAKgJAFgLQAEgMAAgOQAAgWgNgRIgGgGQgGgHgHgEQgMgHgOgBIgGgBQgXAAgRAOg");
        this.shape_4.setTransform(92.6, 102.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(0,102,255,0.796)").s().p("AiyCDQgXAAgRgPIgDgDIgBgBQgQgRgBgYQAAgQAIgNQADgGAFgFIABgCIABAAIADgDQARgPAXAAIAGAAQAOACAMAIQAFADAFAFIADACQAPARAAAXQgBAOgFAMQgEAIgIAIIgKAIQgMAIgOACIgGAAgAjaAdIgBABIgBABIgCACQgFAHgEAHQgFALAAANQAAANAFAKIABADQADAGAFAGIADACIABABQAQAQAYAAIAGAAQAOgCAMgIIAIgHQAGgGAFgIQAGgMAAgOQAAgXgQgRIgBgBIgIgGQgMgJgOgBIgGgBQgYAAgQAQgAC0gKQgXAAgRgPIgDgCIgBgBQgQgSgBgYQAAgQAIgNQADgFAFgFIABgCIABgBIADgCQARgQAXAAIAGABQAOABAMAIQAFADAFAFIADADQAPARAAAWQgBAOgFAMQgEAJgIAIIgKAIQgMAHgOACIgGAAgACMhvIgBABIgBABIgCABQgFAHgEAIQgFAKAAANQAAANAFALIABACQADAHAFAFIADADIABABQAQAQAYAAIAGAAQAOgCAMgIIAIgHQAGgHAFgIQAGgMAAgOQAAgXgQgQIgBgBIgIgHQgMgIgOgCIgGAAQgYAAgQAQg");
        this.shape_5.setTransform(92.6, 102.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#0066FF").s().p("AiyB+QgXAAgQgQIgBgBIgEgEIgFgIIgEgJQgDgIABgJQgBgJADgIQADgJAGgIIAEgEIABgBIABgBQAPgPAXAAIAGAAQAOACAMAJIAFAEIABABQAQAQAAAXQAAAOgGAMQgEAHgGAGIgGAFQgMAJgOACIgGAAgAC0gPQgXAAgQgQIgBgBIgEgEIgFgIIgEgJQgDgIABgJQgBgJADgHQADgKAGgIIAEgEIABAAIABgBQAPgQAXAAIAGABQAOABAMAJIAFAFIABABQAQAQAAAWQAAAPgGALQgEAHgGAGIgGAGQgMAIgOACIgGAAg");
        this.shape_6.setTransform(92.6, 102.1);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("rgba(0,102,255,0.898)").s().p("AiyCAQgYAAgQgQIgBgBIgDgCQgFgGgDgGIgBgDQgFgKAAgNQAAgNAFgLQAEgHAFgHIACgCIABgBIABgBQAQgQAYAAIAGABQAOABAMAJIAIAGIABABQAQARAAAXQAAAOgGAMQgFAIgGAGIgIAHQgMAIgOACIgGAAgAjYAfIgBABIgBABIgEAEQgGAIgDAJQgDAIABAJQgBAJADAIIAEAJIAFAIIAEAEIABABQAQAQAXAAIAGAAQAOgCAMgJIAGgFQAGgGAEgHQAGgMAAgOQAAgXgQgQIgBgBIgFgEQgMgJgOgCIgGAAQgXAAgPAPgAC0gMQgYAAgQgQIgBgBIgDgDQgFgFgDgHIgBgCQgFgLAAgNQAAgNAFgKQAEgIAFgHIACgBIABgBIABgBQAQgQAYAAIAGAAQAOACAMAIIAIAHIABABQAQAQAAAXQAAAOgGAMQgFAIgGAHIgIAHQgMAIgOACIgGAAgACOhtIgBABIgBAAIgEAEQgGAIgDAKQgDAHABAJQgBAJADAIIAEAJIAFAIIAEAEIABABQAQAQAXAAIAGAAQAOgCAMgIIAGgGQAGgGAEgHQAGgLAAgPQAAgWgQgQIgBgBIgFgFQgMgJgOgBIgGgBQgXAAgPAQg");
        this.shape_7.setTransform(92.6, 102.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(0,102,255,0.294)").s().p("AiyCPQgWAAgQgKIgCgBIgEgDIgIgHQgVgVAAgeQAAgeAVgVIAIgIIAEgCIAJgFQANgFAPAAIADAAIAAAAIACAAQAQAAAOAGQAKAFAJAJIAKALQALASAAAWQAAAOgFAMQgFAOgLALQgGAGgIAFIgFADQgMAGgOABIgGAAgAjKAFQgIADgIAFIgEADIgGAGQgUAUgBAdQABAdAUAUIAGAGIAEADIAHAEQAPAIASAAIAGAAQAOgCAMgGIABAAQAIgFAIgIQAKgKAGgNQAFgMAAgOQAAgWgNgSIgIgJQgIgIgJgFQgPgIgRAAQgNAAgLAEgAC0ABQgWAAgQgJIgCgBIgEgCIgIgHQgVgWAAgeQAAgeAVgVIAIgHIAEgDIAJgFQANgGAPAAIADAAIAAAAIACAAQAQAAAOAHQAKAFAJAJIAKAMQALARAAAWQAAAOgFAMQgFAOgLAMQgGAGgIAEIgFADQgMAFgOABIgGAAgACciIQgIADgIAGIgEACIgGAGQgUAVgBAcQABAdAUAVIAGAFIAEADIAHAEQAPAIASAAIAGAAQAOgBAMgGIABgBQAIgFAIgHQAKgLAGgNQAFgMAAgOQAAgWgNgRIgIgKQgIgIgJgFQgPgIgRAAQgNAAgLAEg");
        this.shape_8.setTransform(92.6, 102.1);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("rgba(0,102,255,0.196)").s().p("AiyCSQgXAAgRgLIgDgCIgBgBIgKgIQgWgWABgfQgBgfAWgWIAKgJIAEgCIAEgCQAHgFAJAAQAJgCALAAQAKAAAJACIANADQALAFAKAKQAGAGAFAHQALASgBAWQABAOgFAMQgFAPgMAMIgLAJIgKAGQgMAFgOACIgGAAgAjRAFIgJAFIgEACIgIAIQgVAVAAAeQAAAeAVAVIAIAHIAEADIACABQAQAKAWAAIAGAAQAOgBAMgGIAFgDQAIgFAGgGQALgLAFgOQAFgMAAgOQAAgWgLgSIgKgLQgJgJgKgFQgOgGgQAAIgCAAIAAAAIgDAAQgPAAgNAFgAC0ADQgXAAgRgJIgDgCIgBAAIgKgJQgWgWABgfQgBgfAWgWIAKgIIAEgDIAEgCQAHgEAJgCQAJgDALAAQAKAAAJADIANAFQALAFAKAJQAGAHAFAHQALARgBAWQABAOgFAMQgFAPgMAMIgLAJIgKAGQgMAEgOABIgGAAgACViIIgJAFIgEADIgIAHQgVAVAAAeQAAAeAVAWIAIAHIAEACIACABQAQAJAWAAIAGAAQAOgBAMgFIAFgDQAIgEAGgGQALgMAFgOQAFgMAAgOQAAgWgLgRIgKgMQgJgJgKgFQgOgHgQAAIgCAAIAAAAIgDAAQgPAAgNAGg");
        this.shape_9.setTransform(92.6, 102.1);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AGJPZQgegOghgHQgvgJgogdQhJg3hDg+QgagXghgLQhqgmhlg1QhOgrgyhMQh0iygnjPQh1AfhKhkQgog2gSg9QgqiRhXh6QhAhZBBhTQAug7BDgiQAIitB8iAQBAhCBTgmQBmgxBwgLIGFBzQAghABEgLQAogEAqgBQAMgDAKAHQBcA/AnBoQAaBFAnBBQBaCWgeCqQgDANgNAHQhGAjhSgLICuIfQCFBdBBCWQAcA+gKBEQgDAYgLATQARCfiPBKQgYAMgTASQgyAvhFgBQgpAfgvAAQgiAAglgRgAE0kPQjDAkivBSQhNAjhGAwQhGAxhAA2IglAhIDlGGIDPBoIATAAQBcinC6g4QBGgWBIAXQAwi9hMi3Qgyh7gwh8gAjxqRQghAsAAA/QAAA/AhAsQAhAsAuAAQAuAAAhgsQAggsAAg/QAAg/gggsQghgtguAAQguAAghAtgABfFuQgbgIgHgRQgDgHAAgVQAAgDAvgnQA3gsAxggQCWhhAABXQAAAegyBGQg1BJgiAIgAA1ClQgHgGAAgRQAAgUAVgKQAcgOAJgMQgXgXgqg4Qgpg4gUgVQBGgeBCBYQAQAUANAaIAAAHIAEAAIAGAMQANAeAAAIQAAAUgfAYQgRANgvAZQgOgFgEgDgAktBDQAAgdBdg6QBig/A2ALIh8BMIgLAHIgBABQgLAHgKAHIgBAAIAAAAQgtAfgTAYIgSgDQAAABAAABQgBABAAAAQAAAAgBABQAAAAAAAAIAAAAQgDAAAAgPgACmiIIAMAAIgLAHIgBABgABhiXQAAgQAIgHIAPgIICWgFIAAgFIAhACQAjADAEAFQgQALgYAJQgMAAgOADQgaAFgVANIgzAAQgLgGgOAAQgRAAgMAIIgWgBQAAABAAABQgBABAAAAQAAAAAAABQgBAAAAAAIAAAAQgDAAAAgPgAisplIACADIABADg");
        this.shape_10.setTransform(85.7, 100.2);

        this.addChild(this.shape_10, this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 171.5, 200.5);


    (lib.hand = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("ABLHRQgMgLgOgQIgZAAQhhABhrhBQgogZgcgZQgagYAAgIQAAgSADgKIgfAAQgFARgXAKQgrAMgcAKQgagVgFgGQgGgGAAgLQAAgYAOgNIgCgDQAAgVASgHQArgTCNAGIAbAZQAKALAAAEQAAAGgNAMQgJAIgJAGIAeARQBcA0BVAVIgcgxQg8htAAgZQAAgMADgHQgugLhPgqQg7gggagVIgFACQgVAMhqAfIgVgSQgbAFgiABQgTgBgLgDIgHgDQAAgCgDgEQgDgEAAgSQAAhDCkAJIARgFQAhgJAXADIAAgHQAAg0AngVQAYgMBZggIgJgaIgShNIABgDIgDgEQgDgEAAgDQAAgFAEgGIACgJQADgIAHgCQAIgMANgOIABAAIAAgBIAKgMQAugxALgEIBygqIAAAbQgfAKgyAUQgCAFgYAUQgeAWgGAOIAAACIABAAICOgTIBRgKIABAAIAGAAIABgBQACABADAAIACgCIAJgBIAHABQALAAAJgHQAHgEABgFIABAAIAEgDQAFAFADAAQAJAAAAgLIgBgDIApgMIAkgNIAbgcIgOgDIgugHIgeAAIAAgNIAAgPIAbAAQARAEA+AGIAMACQAEgCAIAEQARAHAAAUQAAANgXAUIACAIQASBQAQBtIABAHQB8ABAgAbQAKAKABANQAAAIgCALQAAAkhUA1IgLAHQA4AIAoATQAxAaAAAiQAAAugYAQQgeAUhYACIAeASIgCATQgHAUgdAFIgaAAIABAPQAAATgJAIIgNAFIgZANIAfgFIAjgDQgTgPAAAEQAAgZAYgNQAVgLAeADQAfADAVAUQAXAUAAAiQAAAbgDAKQgIAdgaAAIgmglIgBAMQgIATgcAGIhnAAIgBAFQgGA4gdAnQhSAHgSAHgABwGBIAAADQACAEAGAAQACAAAFgFIAPgBQACAFAFAAQADAAAFgFQACADAGAAQATAAAXgRQAigNARgZQgUgYAAgWIABgRQACgCAAgDIgCgCIACgHIACAAQADAAADgDQACgDAAgCIgDgMQAEgIAFgFQAGgFAIgEIAAgCIgVAAIgMgJIgFgQQgEgRgYgNIgFgFIAAgCQAAg5AxgEQgDgLABgMIABgGQAIgBAAgHQAAgCgGgFIAAAAQAAgOAGgKQgtgJgLgjQgFgPACgTIADgRQAAgYADgSQAEgDACgGIAHgSQAGgFAOgIQAKgHABgHQAGAFABAAQAIAAAAgJIgBgFIAAAAIAPgDIgBgDIgBgLIADgIQABgEAAgvIAAguQAAgKgHgUIgGgTIACgEIABgFIAAgEQgYANgfAQIgOAHQgPgKgDAJQgNABgYAIQg1ATAAAMIAAABQgIgDgBAJIgHADQgMgJgCANQgEgFgMAHIgRAKQgcAHgcAAIhNABIgPADIADALQABAIAHANQAIAPACAGIAEAUQAJAvAMAWIgHAlIgGAGQgGAEgTAAQgSAAgSgfQggAkhKA4IAGABQCOA9BeANIAHAGQAagRAjgLIAOgEIguABQhWgBgygYQglgSAAgPQAAgRAHgFQAIgGAaABIBHAEIAEADQADAAAEgCIAOAAQAPAKAJAAIANgIIAkACQABADADACQADABAWAAIAHADQAFACAJAHQAGAFAFAAIAEADIAAAAIgDAAQgHAAAAAHIAFAJQAGAIAIAAIABAAIgCAGIABACQgEAJgIACIAGABQAPADAJAHIAEAIIAFAIIABAKQAAAFgDAEIgDAFQgKAJgVANIgOgCQgFAAAAAJQgHgBgBAIIgFACQhDAgghgBIgBAAQAVAhAfA8IAWAsIgJAMIABAEQACAGAGAAIACAAIAHAaQANAmATAAIADgBIABAAgAGFBBIgJAHIBXgEQgCgFgigDIgRgBQgUAAgFAGgAEThWIAAAiIAMgBIgDgoQgGADgDAEgAFqhUIABgBQAIgKAMgHIgXgCIACAUg");
        this.shape.setTransform(56.5, 46.6);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 113, 93.1);


    (lib.cloud = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EggjAZWQmogYjbi+QjFisAAkHQAAhfAyhpQA1hxBkhpQDqj1GSh+Qhbg/hUixQhPiqAAhoQAAjLD/gWQAggDAkAAQBtAABbAxQAXANAgAWQAXARAGAAQgXjgAAgdQgDgzACgoQAEhLAYg5QBIiqD1AAQDSAAB6B6QAnAnAbAxQANAZAJAYQAng8BViOQBWiBBohbQEkkCJLhiIAAgDIHXAAQGHBlCSDDQBhCDAADaQAAB5gvCBIgDADQAOAAAUgDIAegGILUAAQIvBvDJEuQBKBxAbCOQARBYAACHQAABFgnBkQguB3hRBkQjZEOljAAQiBAAhFgVQhMgXgigBQAvBbAdAyQAEAMAABbQAABdgnBCQgqBGhhA6QiqBooGCUImwAAQi9glhuhqQgTgRhAhIQgxg2gogeIgfBSQgdBMgnA0Qh+CokZAAQjzAAhpiHQgjgtgZhEQgXhFgLgXQhmA8hEAmQh8BGh4AvQleCKmyAAQhBAAg9gEgEggjAEHQhtARh2BBQiLBLiDCCQh2B0hMB6QhKB2AABDQAAD5DBCUQDFCYF3AVQA8ADBAAAQIEAAF7i2QBfgtB9hQQBZg5AYAAQATAAAYA3QAoBbARAcQBoCuDSAAQEFAABwi6QBDhvAHidQACAAAHgFQAHgFASAAQAHAAArAyQBABLAoApQCuC0CmA7IG/gDQF5hlC+hqQDRh1AAiDQAAipjeiMIiZhZQhGgpAAgZQAAgaAQgJQALgHAdAAQAdAABCAkICSBOQDlBxDdAAQFYAAC/kIQBAhaAmhrQAbhPAAgoQAAh9gRhUQgah/hEhjQixkEnnh0Ir5AAQgmAKhWAgIhSAeIgfgaQgHgHAAgKQAAgMBThoQBTh9AAhvQAAi+hlh+QiHiolGhRInoAAQlPAUjnCVQhLAwhYBOQhsBhgTAOQguAjiBDVQh5DNgCAAQgiAAgbg0QgfhJgYgqQhfinjmAAQjIAAg1CWQgaBMAOBRQAAA3AgClQAQBTAQBKQAAAfgEgDIgLAJQgMAIgTAAQgJAAgjgdQg6gwgWgQQh/hdhrAAQgkAAgeAEQhpAMguA3QgSAWgHAbQgDAOAAAKQAAAXAXBLQAcBaAmBPQAsBZAuA3QBIBXBPAAQAHAAAjA4QAiA2AAAFQAAAkgrAAQgpAAgigdQgbgegGAAQgmAAgmAGg");
        this.shape.setTransform(292.4, 162.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#0038FC", "#74FFFF"], [0, 1], -284.8, 0, 284.9, 0).s().p("EggiAYHQl3gVjGiYQjAiUAAj5QAAhDBKh2QBMh6B2h0QCCiCCMhLQB1hBBugRQAmgGAlAAQAHAAAbAeQAiAdAoAAQAsAAAAgkQAAgFgig2Qgkg4gGAAQhQAAhHhXQgug3gshZQgmhPgchaQgXhLAAgXQAAgKADgOQAGgbATgWQAug3BpgMQAegEAkAAQBrAAB/BdQAWAQA6AwQAjAdAJAAQATAAALgIIAMgJQADADAAgfQgPhKgRhTQgfilAAg3QgOhRAahMQA1iWDIAAQDmAABfCnQAYAqAfBJQAbA0AhAAQADAAB4jNQCCjVAugjQATgOBshhQBYhOBLgwQDmiVFQgUIHnAAQFHBRCHCoQBlB+AAC+QAABvhTB9QhTBoAAAMQAAAKAHAHIAeAaIBTgeQBWggAmgKIL5AAQHnB0CxEEQBEBjAaB/QARBUAAB9QAAAogbBPQgmBrhBBaQi+EIlYAAQjeAAjlhxIiRhOQhDgkgcAAQgdAAgLAHQgQAJAAAaQAAAZBGApICZBZQDeCMAACpQAACDjRB1Qi+Bql6BlIm+ADQimg7iui0QgogphBhLQgqgygHAAQgSAAgHAFQgIAFgBAAQgHCdhDBvQhwC6kFAAQjTAAhniuQgRgcgohbQgZg3gSAAQgYAAhaA5Qh8BQhfAtQl8C2oDAAQhBAAg7gDg");
        this.shape_1.setTransform(292.4, 162.6);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 584.9, 325.3);


    (lib.background = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#000000"], [0, 1], 509.9, 0, -509.9, 0).s().p("EhPqAtmMAAAhbLMCfUAAAMAAABbLg");
        this.shape.setTransform(509.9, 291.8);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1019.8, 583.7);


    (lib._100Tei = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("100 TEI PRAJI6 DEIBA", "60px 'IceCream'", "#FFFFFF");
        this.text.lineHeight = 62;
        this.text.lineWidth = 501;

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 504.8, 63.6);


    (lib.Symbol3 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.847)").s().p("ABrGtQgEgBgCgDIi/jvIkmBgQgDABgDgBQgDgBgCgCQgCgDAAgDQAAgDACgDICnkDIi2j2QgCgCAAgEQAAgDACgCQACgDADgBQADgBADAAIEqBQICzj6QACgDACgBQADgBAEABQADABABACQADADAAADIAQE0IEmBeQADABACADQACACAAADQAAAEgCACQgCACgDAAIkgBuIABE1QAAADgBADQgCADgEABIgDAAIgCAAgABnGoIAEACIAFAAIAEgDIABgEIgBk2IEihtIADgDIABgFIgBgEIgEgDIknhfIgRk1IgBgEIgEgDIgFABIgDACIi0D8IkshQIgEAAIgEADIgBAEIABAFIC3D3IioEFIgBAEIABAEIAEADIAFAAIEmhhg");
        this.shape.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("ABsGoIgDgCIjCjyIkoBhIgDAAIgDgBIgBgDIABgDICpkGIi4j5IgBgDIABgCIADgCIACAAIEuBQIC1j9IACgCIADAAIADACIABADIARE2IEoBgIADACIABACIgBAEIgCACIkkBtIABE4IgBADIgCACIgBAAIgCAAgABrGlIACABIABgBIABAAIABgCIgBk6IElhuIABgBIAAgBIAAgCIgBgBIkrhgIgRk4IAAgCIgCgBIgBABIgBAAIi2D+IkvhQIgBAAIgCABIAAABIAAACIC5D6IiqEIIAAABIAAABIACABIABAAIEqhig");
        this.shape_1.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(255,255,255,0.043)").s().p("ABgHTQgPgEgLgMIiujbIkLBYQgPAFgQgFQgPgEgJgNQgKgMgBgQQAAgQAIgOICYjrIiljgQgJgNgBgQQAAgQAJgNQAJgNAPgGQAPgFAPAEIEQBIICijkQAKgMAOgGQAQgFAPAFQAPAEAKANQAKAMABAQIAPEYIELBWQAPAFAKANQAJANABAPQAAAOgJANQgJAOgOAFIkHBlIABEZQAAAQgJANQgJANgPAFQgIADgJAAQgHAAgGgCgABIHBQAKAMAOAEQAPAEAOgFQAOgFAJgNQAJgMAAgPIgBkbIEIhlQAOgFAIgNQAJgNgBgNQAAgPgJgMQgJgMgPgFIkNhWIgPkaQgBgPgJgMQgJgMgPgEQgOgEgPAFQgOAFgJAMIijDlIkShJQgOgEgOAGQgOAFgJAMQgJANABAPQAAAPAJAMICmDiIiZDtQgIANABAPQAAAPAKAMQAJAMAOAEQAPAFAOgFIEMhZg");
        this.shape_2.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(255,255,255,0.545)").s().p("ABmG7QgHgCgFgGIi6jnIkbBdQgIACgHgCQgIgDgFgGQgEgGgBgIQAAgIAEgHICij6IiwjuQgFgGAAgIQAAgIAFgHQAEgGAHgDQAIgDAIACIEgBNICsjyQAFgGAIgDQAHgCAIACQAHACAFAGQAFAHABAIIAQEpIEbBbQAIACAFAHQAFAGAAAIQAAAIgEAFQgFAGgHADIkXBrIABEqQAAAIgEAHQgFAGgHADIgJABIgHgBgABcGyQAEAFAHACQAHACAHgCQAHgDAEgGQAEgGAAgHIgBksIEYhrQAGgDAFgGQADgEAAgHQAAgHgEgGQgFgFgGgDIkdhbIgRkrQAAgIgFgFQgEgGgHgCQgHgCgGADQgHACgFAGIitDzIkihNQgHgCgHACQgGADgEAGQgEAGAAAHQAAAHAEAGICxDvIijD8QgEAGABAHQAAAHAFAGQAEAFAHACQAGACAHgCIEdhdg");
        this.shape_3.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(255,255,255,0.447)").s().p("ABlHAQgJgCgGgIIi4jlIkYBcQgJADgJgCQgJgDgGgIQgFgIgBgJQAAgJAFgIICgj4IiujrQgGgIAAgJQAAgKAFgHQAGgIAJgEQAJgDAJACIEdBMICqjvQAGgHAJgDQAJgEAJADQAJADAGAHQAGAIABAJIAQEmIEYBaQAJADAGAIQAGAHAAAKQAAAIgFAIQgGAHgJAEIkTBpIABEnQAAAKgFAIQgGAHgJAEQgFABgFAAIgIgBgABYG1QAFAGAJADQAIACAIgDQAJgDAFgHQAFgHAAgJIgBkoIEUhqQAJgEAEgHQAFgGAAgIQAAgJgFgHQgGgHgIgCIkahbIgQkoQAAgIgGgHQgFgHgJgCQgIgDgIADQgIADgGAHIirDwIkfhMQgIgDgIAEQgJADgFAHQgEAHAAAJQAAAIAFAIICvDsIihD5QgFAHABAJQAAAJAFAHQAGAGAIADQAIADAJgDIEZhdg");
        this.shape_4.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(255,255,255,0.749)").s().p("ABpGyQgEgCgDgDIi/jtIkhBfQgFABgEgBQgFgBgDgEQgCgEgBgEQAAgFADgEIClkAIi0j0QgDgEAAgFQAAgEADgEQACgEAFgCQAEgBAFABIEnBOICwj3QADgEAFgCQAEgBAFABQAFACADAEQACADABAFIAQEwIEiBeQAFABADAEQADAEAAAEQAAAFgDADQgCADgFACIkdBtIABExQAAAFgDAEQgCAEgFACIgFAAIgEAAgABkGrQACADAEABQAEABADgBQAEgBACgDQADgEAAgEIgBkyIEehuQAEgCACgBQACgEAAgEQAAgEgCgDQgDgDgEgBIkjheIgRkyQAAgEgDgDQgCgDgEgBQgEgBgDABQgEABgDAEIixD4IkphPQgDgBgEACQgEABgCADQgCAEAAADQAAAEACAEIC1D1IimEBQgCADAAAEQAAAEACAEQADADADABQAEABAEgBIEjhgg");
        this.shape_5.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(255,255,255,0.647)").s().p("ABoG3QgGgCgEgFIi8jqIkfBeQgGACgGgCQgGgCgDgFQgEgFgBgGQAAgHAEgFICjj9IiyjxQgEgFAAgGQAAgHAEgFQADgFAGgCQAGgDAHACIEjBOICvj1QADgFAGgCQAGgCAGACQAHABADAGQAEAFABAGIAQEtIEfBcQAGACAEAFQAEAFAAAGQAAAHgEADQgDAFgGADIkaBsIABEtQAAAHgDAFQgEAFgGACIgHABIgFAAgABgGuQADAFAFABQAGACAFgCQAFgCAEgFQADgEAAgGIgBkvIEbhtQAFgCADgEQADgDAAgGQAAgFgDgFQgEgEgFgCIkhhdIgQkuQAAgGgDgEQgEgEgFgCQgGgCgFACQgFACgDAFIiwD1IklhOQgGgBgFACQgFACgDAFQgDAEAAAGQAAAFADAFICzDyIilD+QgCAFAAAGQAAAFADAFQAEAEAFACQAFABAGgBIEghfg");
        this.shape_6.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("rgba(255,255,255,0.145)").s().p("ABhHPQgOgEgJgLIixjdIkOBZQgNAEgOgEQgOgEgIgMQgJgLgBgOQAAgPAHgMICbjuIiojjQgIgMgBgOQAAgOAIgMQAIgMANgFQAOgFAOAEIETBJICkjmQAJgMANgFQAOgEANAEQAOAEAJALQAJALABAOIAPEcIEOBXQAOAEAJAMQAIALABAPQAAAMgIAMQgIAMgNAFIkKBmIABEcQAAAOgIAMQgIAMgOAFQgHACgIAAQgGAAgGgBgABMG+QAJALANADQANAEAMgFQANgEAIgLQAIgLAAgOIgBkeIELhmQANgFAHgMQAIgLgBgLQAAgOgIgLQgIgLgNgEIkQhXIgQkdQgBgOgIgKQgIgLgNgEQgNgEgNAFQgNAEgIALIilDoIkVhKQgNgDgNAFQgMAEgIALQgHALAAAOQAAANAIALICpDlIicDwQgHALABAOQAAANAJALQAIAKANAFQANADAMgEIEQhZg");
        this.shape_7.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("rgba(255,255,255,0.247)").s().p("ABiHKQgMgEgIgKIizjfIkRBaQgMAEgNgEQgMgEgHgKQgIgKgBgNQAAgMAHgLICcjxIiqjmQgIgKAAgNQAAgNAHgKQAHgLAMgEQAMgFAMADIEXBKICmjpQAIgKAMgEQAMgEAMADQAMAEAIAKQAIAKABAMIAPEgIESBYQAMAEAIAKQAHAKABANQAAAKgHALQgHAKgMAFIkNBnIABEgQAAANgHAKQgHALgNAEQgGACgHAAQgFAAgGgBgABQG7QAIAJALADQALADAMgEQALgEAHgJQAHgKAAgMIgBkiIEOhnQALgFAHgKQAHgJgBgKQAAgMgHgKQgHgJgMgEIkThZIgQkgQAAgMgIgKQgHgJgMgDQgLgEgMAEQgLAEgHAKIinDqIkYhKQgMgDgLAEQgLAEgHAKQgGAKAAAMQAAAMAHAJICrDoIidDyQgHAKABAMQAAAMAHAKQAIAJALADQAMAEALgEIEThag");
        this.shape_8.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("rgba(255,255,255,0.345)").s().p("ABkHFQgLgDgHgJIi1jiIkVBbQgKADgLgDQgLgDgGgJQgHgJgBgLQAAgLAGgJICej1IisjoQgHgJAAgLQAAgLAGgKQAHgJAKgEQAKgDALACIEaBLICojsQAHgJAKgDQALgEAKADQALADAHAJQAHAJABALIAPEiIEWBZQAKAEAHAJQAGAJABALQAAAJgGAJQgGAJgLAEIkQBpIABEjQAAALgGAJQgHAJgKAEQgGACgGAAIgJgBgABUG4QAHAIAJACQAKADAKgDQAKgEAGgIQAGgJAAgKIgBklIEShpQAJgEAGgIQAGgJgBgIQAAgKgGgJQgGgIgKgDIkXhaIgQkkQAAgKgHgIQgGgJgKgDQgKgCgKADQgJADgHAJIipDtIkbhLQgKgDgKAEQgKADgGAJQgFAIAAALQAAAKAGAIICtDqIifD2QgGAJABAKQAAAKAHAIQAGAJAKADQAKADAKgEIEWhbg");
        this.shape_9.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("rgba(255,255,255,0.396)").s().p("ABkHDQgJgDgHgIIi3jkIkWBcQgJADgKgDQgKgDgHgIQgGgJAAgKQgBgKAGgJICfj1IitjqQgGgJAAgKQAAgKAFgJQAGgJAKgDQAKgEAJADIEcBLICpjtQAHgJAJgDQAKgDAKADQAKADAGAIQAHAIAAAKIAQEkIEXBaQAKADAGAIQAGAJAAAKQABAIgGAJQgGAIgKAEIkRBpIABElQAAAKgGAJQgGAJgKADQgFACgGAAIgJgBgABWG2QAGAIAJACQAJADAJgDQAJgEAGgHQAFgIAAgKIgBknIEThpQAJgEAGgHQAFgIAAgIQAAgKgGgHQgGgIgJgDIkYhaIgQkmQgBgJgGgIQgGgHgJgDQgJgDgJAEQgJADgGAHIiqDvIkdhMQgJgCgJADQgJAEgGAIQgFAHAAAKQAAAJAGAIICuDrIigD4QgFAIAAAJQABAJAFAIQAGAIAJADQAJACAJgDIEYhcg");
        this.shape_10.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("rgba(255,255,255,0.898)").s().p("ABrGrIgEgDIjBjxIkmBhIgFAAIgEgDIgBgEIABgEICokFIi3j3IgBgFIABgEIAEgDIAEAAIEsBQIC0j8IADgCIAFAAIAEACIABAEIARE2IEnBfIAEACIABAEIgBAFIgDADIkiBtIABE2IgBAFIgEACIgDABIgCAAgABpGmIADACIADAAIACgCIABgDIgBk4IEkhtIACgCIABgEIgBgCIgDgCIkohgIgRk2IgBgDIgDgCIgDAAIgCACIi1D9IkuhQIgCAAIgDACIgBACIABADIC4D5IipEGIgBADIABADIADABIADAAIEohhg");
        this.shape_11.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("rgba(255,255,255,0.796)").s().p("ABqGvQgEgBgDgDIi/juIkjBgQgEABgEgBQgDgBgDgDQgCgEAAgEQAAgEACgDICmkBIi1j1QgCgEAAgEQAAgDACgEQACgDAEgBQAEgCADABIEpBPICxj4QADgEAEgBQADgBAEABQAEABACADQADADAAAEIAREyIEjBeQAEABADADQACADAAAEQAAAEgCAEQgCABgEACIkeBuIABEyQAAAEgDAEQgCADgEABIgEABIgDgBgABlGqQACACADABQAEABACgBQAEgBABgDQACgDAAgDIgBk0IEghvQADAAACgCQACgCAAgEQAAgDgCgCQgCgDgDgBIkmheIgQk0QAAgDgDgCQgBgDgEgBQgDgBgDABQgCABgCADIizD6IkqhPQgDgBgDABQgDABgCADQgCACAAADQAAAEACACIC2D2IinEDQgCADAAADQAAADACADQACACADABQADABADgBIElhgg");
        this.shape_12.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("rgba(255,255,255,0.498)").s().p("ABmG+QgJgDgFgHIi5jmIkZBdQgJACgIgCQgIgDgGgHQgFgGAAgJQgBgJAFgHIChj5IivjtQgFgHAAgIQAAgJAEgHQAFgIAJgDQAIgDAIADIEfBMICsjwQAFgHAIgDQAIgDAIACQAJADAFAHQAGAHAAAIIAQEoIEaBaQAIADAGAHQAFAHAAAJQAAAIgFAGQgEAHgIADIkVBrIABEoQAAAJgFAHQgFAHgJADQgEACgFAAIgHgBgABaGzQAFAGAHACQAIACAIgCQAHgDAFgHQAEgGAAgIIgBkqIEXhrQAHgDAFgHQAEgEAAgIQAAgIgFgGQgFgHgIgCIkbhbIgQkqQgBgHgFgHQgFgGgHgCQgIgDgHADQgIADgFAGIisDxIkghMQgIgCgIADQgHADgEAGQgFAHAAAIQAAAIAFAGICwDuIiiD6QgEAHAAAIQABAIAEAGQAFAGAIADQAHACAIgDIEbhdg");
        this.shape_13.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("rgba(255,255,255,0.698)").s().p("ABoG0QgFgBgDgFIi9jrIkgBfQgGABgFgBQgFgCgEgEQgDgFAAgFQAAgGACgFIClj+IizjzQgDgEAAgGQAAgFADgEQADgFAFgCQAFgCAGABIElBOICwj1QADgFAFgCQAFgCAGACQAFACAEAEQADAEAAAGIAQEuIEhBdQAFACAEAEQADAFAAAFQAAAGgDADQgDAEgFACIkbBtIABEvQAAAGgDAEQgEAFgFACIgGABIgFgBgABiGtQADADAEACQAFABAEgBQAFgCACgEQADgEAAgFIgBkxIEdhtQAFgCACgDQADgDAAgFQAAgEgDgEQgDgEgFgBIkiheIgQkwQgBgFgCgDQgDgEgFgCQgFgBgEABQgFACgDAEIiwD3IknhOQgFgBgEABQgFACgCAEQgDAEAAAEQAAAFADAEIC0D0IilEAQgDAEAAAFQABAEACAEQADAEAFABQAEABAFgBIEhhfg");
        this.shape_14.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("rgba(255,255,255,0.596)").s().p("ABnG5QgHgCgEgGIi7jpIkdBeQgHACgGgCQgHgCgFgGQgEgFAAgHQgBgHAEgHICjj7IixjwQgEgFAAgHQAAgIAEgGQAEgFAGgDQAHgCAHABIEiBNICtjzQAFgFAGgDQAHgCAHACQAHACAEAGQAFAFAAAHIAQErIEeBcQAGACAFAGQAEAGAAAHQAAAHgEAEQgEAGgGADIkYBrIABEsQAAAHgEAGQgEAGgHACIgIACIgGgBgABeGwQAEAFAGABQAGACAGgCQAGgCADgFQAEgGAAgGIgBkuIEahsQAGgCADgFQAEgEAAgGQAAgGgEgFQgEgFgGgCIkfhdIgQksQgBgHgEgFQgDgFgHgCQgGgBgGACQgGACgEAFIiuD0IkkhNQgGgCgGACQgGADgDAFQgEAFAAAGQAAAHAEAFICyDxIikD9QgDAFAAAGQABAHADAFQAEAFAGACQAGACAGgCIEfhfg");
        this.shape_15.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("rgba(255,255,255,0.094)").s().p("ABgHRQgOgEgKgMIiwjcIkMBZQgOAFgPgFQgOgEgJgMQgKgMAAgPQgBgPAIgNICZjtIimjiQgJgMAAgPQgBgPAJgNQAJgMAOgFQAOgGAOAEIESBJICjjlQAJgMAOgFQAPgFAOAEQAPAEAJAMQAJAMABAPIAPEaIENBWQAPAFAJAMQAJAMAAAPQABANgJANQgIANgOAFIkIBlIABEbQAAAPgJAMQgJANgOAFQgIADgIAAQgGAAgHgCgABKG/QAJAMAOADQAOAEANgEQAOgFAIgMQAIgMAAgOIgBkdIEKhlQANgFAIgMQAIgMAAgNQgBgOgIgLQgJgMgOgEIkOhXIgPkcQgBgOgJgLQgJgLgOgFQgNgEgOAFQgNAFgJALIikDnIkThJQgOgEgOAFQgNAFgIAMQgIAMAAAOQABAOAIAMICoDjIibDuQgHAMAAAPQABAOAJALQAIAMAOAEQAOAEANgFIEOhYg");
        this.shape_16.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("rgba(255,255,255,0.196)").s().p("ABiHMQgNgDgJgLIiyjeIkQBZQgMAEgNgEQgNgEgIgKQgJgLAAgOQgBgNAHgLICcjwIipjlQgIgLAAgNQAAgOAHgLQAIgLAMgFQANgEANADIEVBKICljoQAIgLANgFQANgEANAEQANAEAIAKQAIALABANIAQEeIEQBXQANAEAIALQAIALAAANQABAMgIALQgHAMgNAEIkLBnIABEeQAAAOgIALQgIALgNAEQgHADgHAAQgGAAgFgCgABOG8QAIAKAMAEQANADALgEQANgEAHgLQAHgKAAgNIgBkgIENhnQAMgEAHgLQAHgLAAgKQgBgNgHgKQgIgKgMgEIkShYIgPkgQgBgMgIgKQgIgKgMgEQgMgDgMAEQgMAEgIAKIimDpIkXhKQgMgDgMAFQgMAEgHALQgHAKAAANQAAANAIAKICqDmIicDxQgHALAAAMQABANAIAKQAHAKAMAEQANAEAMgEIERhag");
        this.shape_17.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("rgba(255,255,255,0.294)").s().p("ABjHHQgLgDgIgJIi0jhIkTBaQgLAEgMgDQgLgEgIgJQgHgKAAgMQgBgLAHgKICdjzIirjnQgHgKAAgMQAAgMAGgKQAHgKALgEQALgEAMADIEYBKICnjqQAHgKALgEQAMgEALAEQAMADAHAKQAIAJAAAMIAQEhIETBYQAMAEAHAJQAHAKAAAMQABAKgHAKQgHAKgLAEIkOBoIABEhQAAAMgHAKQgHAKgLAEQgGACgHAAIgKgCgABSG5QAHAJALADQAKADALgEQAKgDAHgKQAGgJAAgLIgBkjIEQhoQALgEAGgKQAGgJAAgJQgBgLgGgJQgHgJgLgDIkVhZIgPkjQgBgLgHgJQgHgJgLgDQgKgDgLAEQgKADgHAJIioDsIkahKQgLgDgKAEQgKADgHAKQgGAJAAALQAAALAHAJICsDpIieD0QgGAJAAALQABALAGAJQAHAJALADQALAEAKgEIEVhbg");
        this.shape_18.setTransform(112.7, 64.5, 0.276, 0.276);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("ABtGmIgCgBIjDj0IkqBiIgBAAIgCgBIAAgBIAAgBICqkIIi5j6IAAgCIAAgBIACgBIABAAIEvBQIC2j+IABAAIABgBIACABIAAACIARE4IErBgIABABIAAACIAAABIgBABIklBuIABE6IgBACIgBAAIgBABIAAAAg");
        this.shape_19.setTransform(112.7, 64.5, 0.276, 0.276);

        this.instance = new lib.Head();
        this.instance.setTransform(111.3, 120.9, 1, 1, 17, 0, 0, 85.8, 100.2);

        this.addChild(this.instance, this.shape_19, this.shape_18, this.shape_17, this.shape_16, this.shape_15, this.shape_14, this.shape_13, this.shape_12, this.shape_11, this.shape_10, this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 222.5, 241.8);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
