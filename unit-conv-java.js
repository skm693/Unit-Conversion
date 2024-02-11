function box1() {
    let box1_value = document.getElementById('box-1').value;
    let box2_value = document.getElementById('box-2').value;
    let op1 = document.getElementById('select-1').value;
    let op2 = document.getElementById('select-2').value;
    if (op1 == "Kilometer" && op2 == "Kilometer") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Meter") {
        box2_value = 1000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Centimeter") {
        box2_value = 100000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Milimeter") {
        box2_value = 1e+6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Micrometer") {
        box2_value = 1e+9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Nanometer") {
        box2_value = 1e+12 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Mile") {
        box2_value = 0.621371 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Yard") {
        box2_value = 1093.61 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Foot") {
        box2_value = 3280.84 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Inch") {
        box2_value = 39370.1 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Meter" && op2 == "Kilometer") {
        box2_value = .001 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Meter") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Centimeter") {
        box2_value = 100 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Milimeter") {
        box2_value = 1000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Micrometer") {
        box2_value = 1e+6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Nanometer") {
        box2_value = 1e+9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Mile") {
        box2_value = 0.000621371 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Yard") {
        box2_value = 1.09361 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Foot") {
        box2_value = 3.28084 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Inch") {
        box2_value = 39.3701 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Centimeter" && op2 == "Kilometer") {
        box2_value = 1e-5 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Meter") {
        box2_value = .01 * box1_value;
        document.getElementById('box-2').value = box2_value;

    }
    else if (op1 == "Centimeter" && op2 == "Centimeter") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Milimeter") {
        box2_value = 10 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Micrometer") {
        box2_value = 10000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Nanometer") {
        box2_value = 1e+7 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Mile") {
        box2_value = 6.2137e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Yard") {
        box2_value = .0109361 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Foot") {
        box2_value = .0328084 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Inch") {
        box2_value = .393701 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Milimeter" && op2 == "Kilometer") {
        box2_value = 1e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Meter") {
        box2_value = .001 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Centimeter") {
        box2_value = .1 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Milimeter") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Micrometer") {
        box2_value = 1000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Nanometer") {
        box2_value = 1e+6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Mile") {
        box2_value = 6.2137e-7 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Yard") {
        box2_value = .00109361 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Foot") {
        box2_value = .00328084 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Inch") {
        box2_value = .0393701 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }

    else if (op1 == "Micrometer" && op2 == "Kilometer") {
        box2_value = 1e-9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Meter") {
        box2_value = 1e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Centimeter") {
        box2_value = 1e-4 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Milimeter") {
        box2_value = 0.001 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Micrometer") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Nanometer") {
        box2_value = 1000 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Mile") {
        box2_value = 6.2137e-10 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Yard") {
        box2_value = 1.0936e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Foot") {
        box2_value = 3.2808e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Inch") {
        box2_value = 3.937e-5 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }

    else if (op1 == "Nanometer" && op2 == "Kilometer") {
        box2_value = 1e-12 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Meter") {
        box2_value = 1e-9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Centimeter") {
        box2_value = 1e-7 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Milimeter") {
        box2_value = 1e-6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Micrometer") {
        box2_value = .001 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Nanometer") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Mile") {
        box2_value = 6.2137e-13 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Yard") {
        box2_value = 1.0936e-9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Foot") {
        box2_value = 3.2808e-9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Inch") {
        box2_value = 3.937e-8 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Mile" && op2 == "Kilometer") {
        box2_value = 1.60934 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Meter") {
        box2_value = 1609.34 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Centimeter") {
        box2_value = 160934 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Milimeter") {
        box2_value = 1.609e+6 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Micrometer") {
        box2_value = 1.609e+9 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Nanometer") {
        box2_value = 1.609e+12 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Mile") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Yard") {
        box2_value = 1706 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Foot") {
        box2_value = 5280 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Inch") {
        box2_value = 63360 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Yard" && op2 == "Kilometer") {
        box2_value = .0009144 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Meter") {
        box2_value = .9144 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Centimeter") {
        box2_value = 91.44 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Milimeter") {
        box2_value = 914.4 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Micrometer") {
        box2_value = 914400 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Nanometer") {
        box2_value = 9.144e+8 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Mile") {
        box2_value = box1_value / 1760;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Yard") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Foot") {
        box2_value = 3 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Inch") {
        box2_value = 36 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }

    else if (op1 == "Foot" && op2 == "Kilometer") {
        box2_value = .0003048 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Meter") {
        box2_value = .3048 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Centimeter") {
        box2_value = 30.48 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Milimeter") {
        box2_value = 304.8 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Micrometer") {
        box2_value = 304800 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Nanometer") {
        box2_value = 3.048e+8 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Mile") {
        box2_value = box1_value / 5280;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Yard") {
        box2_value = box1_value / 3;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Foot") {
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Inch") {
        box2_value = 12 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }


    else if (op1 == "Inch" && op2 == "Kilometer") {
        box2_value = box1_value / 39370;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Meter") {
        box2_value = box1_value / 39.37;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Centimeter") {
        box2_value = 2.54 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Milimeter") {
        box2_value = 25.4 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Micrometer") {
        box2_value = 25400 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Nanometer") {
        box2_value = 2.54e+7 * box1_value;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Mile") {
        box2_value = box1_value / 63360;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Yard") {
        box2_value = box1_value / 36;
        document.getElementById('box-2').value = box2_value;
    }
    else if (op1 == "Inch" && op2 == "Foot") {
        box2_value = box1_value / 12;
        document.getElementById('box-2').value = box2_value;

    }
    else if (op1 == "Inch" && op2 == "Inch") {
        document.getElementById('box-2').value = box1_value;
    }
    his_show();
}



function box2() {
    let box1_value = document.getElementById('box-1').value;
    let box2_value = document.getElementById('box-2').value;
    let op1 = document.getElementById('select-1').value;
    let op2 = document.getElementById('select-2').value;
    if (op1 == "Kilometer" && op2 == "Kilometer") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Kilometer" && op2 == "Meter") {
        box1_value = box2_value / 1000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Centimeter") {
        box1_value = box2_value / 100000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Milimeter") {
        box1_value = box2_value / 1e+6;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Micrometer") {
        box1_value = box2_value / 1e+9;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Nanometer") {
        box1_value = box2_value / 1e+12;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Mile") {
        box1_value = box2_value * 1.60934;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Yard") {
        box1_value = box2_value / 1093.61;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Foot") {
        box1_value = box2_value / 3280.84;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Kilometer" && op2 == "Inch") {
        box1_value = box2_value / 39370.1;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Meter" && op2 == "Kilometer") {
        box1_value = box2_value / .001;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Meter") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Meter" && op2 == "Centimeter") {
        box1_value = box2_value / 100;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Milimeter") {
        box1_value = box2_value / 1000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Micrometer") {
        box1_value = box2_value / 1e+6;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Nanometer") {
        box1_value = box2_value / 1e+9;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Mile") {
        box1_value = box2_value / 0.000621371;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Yard") {
        box1_value = box2_value / 1.09361;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Foot") {
        box1_value = box2_value / 3.28084;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Meter" && op2 == "Inch") {
        box1_value = box2_value / 39.3701;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Centimeter" && op2 == "Kilometer") {
        box1_value = box2_value * 100000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Meter") {
        box1_value = 100 * box2_value;
        document.getElementById('box-1').value = box1_value;

    }
    else if (op1 == "Centimeter" && op2 == "Centimeter") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Centimeter" && op2 == "Milimeter") {
        box1_value = 0.1 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Micrometer") {
        box1_value = 1e-4 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Nanometer") {
        box1_value = box2_value / 1e+7;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Mile") {
        box1_value = box2_value / 6.2137e-6;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Yard") {
        box1_value = box2_value / .0109361;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Foot") {
        box1_value = box2_value / .0328084;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Centimeter" && op2 == "Inch") {
        box1_value = box2_value / .393701;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Milimeter" && op2 == "Kilometer") {
        box1_value = box2_value / 1e-6;
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Meter") {
        box1_value = 1000 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Centimeter") {
        box1_value = 10 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Milimeter") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Milimeter" && op2 == "Micrometer") {
        box1_value = box2_value / 1000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Nanometer") {
        box1_value = box2_value / 1e+6;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Mile") {
        box1_value = box2_value / 6.2137e-7;
        document.getElementById('box-2').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Yard") {
        box1_value = box2_value / .00109361;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Foot") {
        box1_value = box2_value / .00328084;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Milimeter" && op2 == "Inch") {
        box1_value = box2_value / .0393701;
        document.getElementById('box-1').value = box1_value;
    }

    else if (op1 == "Micrometer" && op2 == "Kilometer") {
        box1_value = box2_value * 1e+9;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Meter") {
        box1_value = box2_value / 1e-6;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Centimeter") {
        box1_value = box2_value / 1e-4;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Milimeter") {
        box1_value = 1000 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Micrometer") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Micrometer" && op2 == "Nanometer") {
        box1_value = .001 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Mile") {
        box1_value = box2_value / 6.2137e-10;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Yard") {
        box1_value = box2_value * 914400;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Foot") {
        box1_value = box2_value * 304800;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Micrometer" && op2 == "Inch") {
        box1_value = box2_value * 25400;
        document.getElementById('box-1').value = box1_value;
    }

    else if (op1 == "Nanometer" && op2 == "Kilometer") {
        box1_value = 1e+12 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Meter") {
        box1_value = 1e+9 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Centimeter") {
        box1_value = 1e+7 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Milimeter") {
        box1_value = 1e-4 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Micrometer") {
        box1_value = .001 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Nanometer") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Nanometer" && op2 == "Mile") {
        box1_value = box2_value * 1609350000000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Yard") {
        box1_value = 914400000 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Foot") {
        box1_value = 304800000 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Nanometer" && op2 == "Inch") {
        box1_value = 25400000 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Mile" && op2 == "Kilometer") {
        box1_value = 0.6213688756 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Meter") {
        box1_value = 0.0006213689 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Centimeter") {
        box1_value = 0.0000062137 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Milimeter") {
        box1_value = 6.213688756E-7 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Micrometer") {
        box1_value = 6.213688756E-10 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Nanometer") {
        box1_value = 6.213688756E-13 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Mile") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Mile" && op2 == "Yard") {
        box1_value = 0.0005681797 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Foot") {
        box1_value = 0.0001893932 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Mile" && op2 == "Inch") {
        box1_value = 0.0000157828 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Yard" && op2 == "Kilometer") {
        box1_value = 1093.6132983 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Meter") {
        box1_value = 1.0936132983 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Centimeter") {
        box1_value = 0.010936133 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Milimeter") {
        box1_value = 0.0010936133 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Micrometer") {
        box1_value = 0.0000010936 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Nanometer") {
        box1_value = 1.093613298E-9 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Mile") {
        box1_value = box2_value * 1760.0065617;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Yard") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Yard" && op2 == "Foot") {
        box1_value = box2_value / 3;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Yard" && op2 == "Inch") {
        box1_value = box2_value / 36;
        document.getElementById('box-1').value = box1_value;
    }

    else if (op1 == "Foot" && op2 == "Kilometer") {
        box1_value = 39370.07874 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Meter") {
        box1_value = 3.280839895 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Centimeter") {
        box1_value = 0.032808399 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Milimeter") {
        box1_value = 0.0032808399 * box2_value;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Micrometer") {
        box1_value = box2_value / 304800;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Nanometer") {
        box1_value = box2_value / 304800000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Mile") {
        box1_value = box2_value * 5280.019685;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Yard") {
        box1_value = box2_value * 3;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Foot" && op2 == "Foot") {
        document.getElementById('box-1').value = box2_value;
    }
    else if (op1 == "Foot" && op2 == "Inch") {
        box1_value = box2_value / 12;
        document.getElementById('box-1').value = box1_value;
    }


    else if (op1 == "Inch" && op2 == "Kilometer") {
        box1_value = box2_value / 0.0000254;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Meter") {
        box1_value = box2_value / 0.0254;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Centimeter") {
        box1_value = box1_value / 2.54;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Milimeter") {
        box1_value = box2_value / 25.4;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Micrometer") {
        box1_value = box2_value / 25400;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Nanometer") {
        box1_value = box2_value / 25400000;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Mile") {
        box1_value = box2_value * 63360.23622;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Yard") {
        box1_value = box2_value * 36;
        document.getElementById('box-1').value = box1_value;
    }
    else if (op1 == "Inch" && op2 == "Foot") {
        box1_value = box2_value * 12;
        document.getElementById('box-1').value = box1_value;

    }
    else if (op1 == "Inch" && op2 == "Inch") {
        document.getElementById('box-1').value = box2_value;
    }
    his_show2();
}
function menu_on_off() {
    let dropdown = document.getElementById('m-op');
    if (dropdown.style.display == "block")
        dropdown.style.display = "none";
    else
        dropdown.style.display = "block";



}

function history_on_off() {
    let his = document.getElementById('history');
    if (his.style.display == "block")
        his.style.display = "none";
    else
        his.style.display = "block";
}



function his_show() {
    let box1_value = document.getElementById('box-1').value;
    let box2_value = document.getElementById('box-2').value;
    let op1 = document.getElementById('select-1').value;
    let op2 = document.getElementById('select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);


}
function his_show2() {
    let box1_value = document.getElementById('box-1').value;
    let box2_value = document.getElementById('box-2').value;
    let op1 = document.getElementById('select-1').value;
    let op2 = document.getElementById('select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}


// mass


function mass_box1() {
    let box1_value = document.getElementById('ms_box-1').value;
    let box2_value = document.getElementById('ms_box-2').value;
    let op1 = document.getElementById('ms_select-1').value;
    let op2 = document.getElementById('ms_select-2').value;
    if (op1 == "Kilogram" && op2 == "Kilogram") {
        document.getElementById('ms_box-2').value = box1_value;
    }
    else if (op1 == "Kilogram" && op2 == "Gram") {
        box2_value = box1_value * 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram" && op2 == "Miligram") {
        box2_value = box1_value * 1000000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram" && op2 == "Ton") {
        box2_value = box1_value / 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram" && op2 == "Pound") {
        box2_value = box1_value * 2.20462;
        document.getElementById('ms_box-2').value = box2_value;
    }

    else if (op1 == "Gram" && op2 == "Kilogram") {
        box2_value = box1_value / 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Gram" && op2 == "Gram") {
        document.getElementById('ms_box-2').value = box1_value;
    }
    else if (op1 == "Gram" && op2 == "Miligram") {
        box2_value = box1_value * 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Gram" && op2 == "Ton") {
        box2_value = box1_value / 1000000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Gram" && op2 == "Pound") {
        box2_value = box1_value * 0.00220462;
        document.getElementById('ms_box-2').value = box2_value;
    }


    else if (op1 == "Miligram" && op2 == "Kilogram") {
        box2_value = box1_value * 1e-6;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Miligram" && op2 == "Gram") {
        box2_value = box1_value / 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Miligram" && op2 == "Miligram") {
        document.getElementById('ms_box-2').value = box1_value;
    }
    else if (op1 == "Miligram" && op2 == "Ton") {
        box2_value = box1_value * 1e-9;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Miligram" && op2 == "Pound") {
        box2_value = box1_value * 2.2046e-6;
        document.getElementById('ms_box-2').value = box2_value;
    }


    else if (op1 == "Ton" && op2 == "Kilogram") {
        box2_value = box1_value * 1000;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Ton" && op2 == "Gram") {
        box2_value = box1_value * 1e+6;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Ton" && op2 == "Miligram") {
        box2_value = box1_value * 1e+9;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Ton" && op2 == "Ton") {
        document.getElementById('ms_box-2').value = box1_value;
    }
    else if (op1 == "Ton" && op2 == "Pound") {
        box2_value = box1_value * 2204.62;
        document.getElementById('ms_box-2').value = box2_value;
    }

    else if (op1 == "Pound" && op2 == "Kilogram") {
        box2_value = box1_value * 0.453592;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Pound" && op2 == "Gram") {
        box2_value = box1_value * 453.592;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Pound" && op2 == "Miligram") {
        box2_value = box1_value * 453592;
        document.getElementById('ms_box-2').value = box2_value;
    }
    else if (op1 == "Pound" && op2 == "Ton") {
        box2_value = box1_value * 0.000453592;
        document.getElementById('ms_box-2').value = box2_value;

    }
    else if (op1 == "Pound" && op2 == "Pound") {
        document.getElementById('ms_box-2').value = box1_value;
    }
    mass_his_show();
}

function mass_his_show() {
    let box1_value = document.getElementById('ms_box-1').value;
    let box2_value = document.getElementById('ms_box-2').value;
    let op1 = document.getElementById('ms_select-1').value;
    let op2 = document.getElementById('ms_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);


}

function mass_box2() {
    let box1_value = document.getElementById('ms_box-1').value;
    let box2_value = document.getElementById('ms_box-2').value;
    let op1 = document.getElementById('ms_select-1').value;
    let op2 = document.getElementById('ms_select-2').value;
    if (op1 == "Kilogram" && op2 == "Kilogram") {
        document.getElementById('ms_box-1').value = box2_value;
    }
    else if (op1 == "Kilogram" && op2 == "Gram") {
        box1_value = box2_value / 1000;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram" && op2 == "Miligram") {
        box1_value = box2_value / 1000000;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram" && op2 == "Ton") {
        box1_value = box2_value * 1000;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram" && op2 == "Pound") {
        box1_value = box2_value * 0.453592;
        document.getElementById('ms_box-1').value = box1_value;
    }


    else if (op1 == "Gram" && op2 == "Kilogram") {
        box1_value = box2_value * 1000;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Gram" && op2 == "Gram") {
        document.getElementById('ms_box-1').value = box2_value;
    }
    else if (op1 == "Gram" && op2 == "Miligram") {
        box1_value = box2_value * .001;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Gram" && op2 == "Ton") {
        box1_value = box2_value * 1e+6;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Gram" && op2 == "Pound") {
        box1_value = box2_value * 453.592;
        document.getElementById('ms_box-1').value = box1_value;
    }

    else if (op1 == "Miligram" && op2 == "Kilogram") {
        box1_value = box2_value * 1e+6;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Miligram" && op2 == "Gram") {
        box1_value = box2_value * 1000;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Miligram" && op2 == "Miligram") {
        document.getElementById('ms_box-1').value = box2_value;
    }
    else if (op1 == "Miligram" && op2 == "Ton") {
        box1_value = box2_value * 1e+9;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Miligram" && op2 == "Pound") {
        box1_value = box2_value * 453592;
        document.getElementById('ms_box-1').value = box1_value;
    }

    else if (op1 == "Ton" && op2 == "Kilogram") {
        box1_value = box2_value * 0.001;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Ton" && op2 == "Gram") {
        box1_value = box2_value * 1e-6;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Ton" && op2 == "Miligram") {
        box1_value = box2_value * 1e-9;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Ton" && op2 == "Ton") {
        document.getElementById('ms_box-1').value = box2_value;
    }
    else if (op1 == "Ton" && op2 == "Pound") {
        box1_value = box2_value * .000453592;
        document.getElementById('ms_box-1').value = box1_value;
    }

    else if (op1 == "Pound" && op2 == "Kilogram") {
        box1_value = box2_value * 2.20462;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Pound" && op2 == "Gram") {
        box1_value = box2_value / 453.592;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Pound" && op2 == "Miligram") {
        box1_value = box2_value / 453592;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Pound" && op2 == "Ton") {
        box1_value = box2_value * 2204.62;
        document.getElementById('ms_box-1').value = box1_value;
    }
    else if (op1 == "Pound" && op2 == "Pound") {
        document.getElementById('ms_box-1').value = box2_value;
    }
    mass_his_show2();

}

function mass_his_show2() {
    let box1_value = document.getElementById('ms_box-1').value;
    let box2_value = document.getElementById('ms_box-2').value;
    let op1 = document.getElementById('ms_select-1').value;
    let op2 = document.getElementById('ms_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function temp_box1() {
    let box1_value = document.getElementById('tm_box-1').value;
    let box2_value = document.getElementById('tm_box-2').value;
    let op1 = document.getElementById('tm_select-1').value;
    let op2 = document.getElementById('tm_select-2').value;
    if (op1 == "Celsius" && op2 == "Celsius") {
        document.getElementById('tm_box-2').value = box1_value;
    }
    else if (op1 == "Celsius" && op2 == "Fahrenheit") {
        box2_value = (box1_value * 9 / 5) + 32;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Celsius" && op2 == "Kelvin") {
        box2_value = box1_value + 273.15;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Celsius") {
        box2_value = (box1_value - 32) * 5 / 9;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Fahrenheit") {
        document.getElementById('tm_box-2').value = box1_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Kelvin") {
        box2_value = (box1_value - 32) * 5 / 9 + 273.15;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Kelvin" && op2 == "Celsius") {
        box2_value = box1_value - 273.15;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Kelvin" && op2 == "Fahrenheit") {
        box2_value = (box1_value - 273.15) * 9 / 5 + 32;
        document.getElementById('tm_box-2').value = box2_value;
    }
    else if (op1 == "Kelvin" && op2 == "Kelvin") {
        document.getElementById('tm_box-2').value = box1_value;
    }
    temp_his_show();
}

function temp_box2() {
    let box1_value = document.getElementById('tm_box-1').value;
    let box2_value = document.getElementById('tm_box-2').value;
    let op1 = document.getElementById('tm_select-1').value;
    let op2 = document.getElementById('tm_select-2').value;
    if (op1 == "Celsius" && op2 == "Celsius") {
        document.getElementById('tm_box-1').value = box2_value;
    }
    else if (op1 == "Celsius" && op2 == "Fahrenheit") {
        box1_value = (box2_value - 32) * 5 / 9;

        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Celsius" && op2 == "Kelvin") {
        box1_value = box2_value - 273.15;
        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Celsius") {
        box1_value = (box2_value * 9 / 5) + 32;
        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Fahrenheit") {
        document.getElementById('tm_box-1').value = box2_value;
    }
    else if (op1 == "Fahrenheit" && op2 == "Kelvin") {
        box1_value = (box2_value - 273.15) * 9 / 5 + 32;
        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Kelvin" && op2 == "Celsius") {
        box1_value = box2_value + 273.15;
        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Kelvin" && op2 == "Fahrenheit") {
        box1_value = (box2_value - 32) * 5 / 9 + 273.15;

        document.getElementById('tm_box-1').value = box1_value;
    }
    else if (op1 == "Kelvin" && op2 == "Kelvin") {
        document.getElementById('tm_box-1').value = box2_value;
    }
    temp_his_show2();

}

function temp_his_show() {
    let box1_value = document.getElementById('tm_box-1').value;
    let box2_value = document.getElementById('tm_box-2').value;
    let op1 = document.getElementById('tm_select-1').value;
    let op2 = document.getElementById('tm_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function temp_his_show2() {
    let box1_value = document.getElementById('tm_box-1').value;
    let box2_value = document.getElementById('tm_box-2').value;
    let op1 = document.getElementById('tm_select-1').value;
    let op2 = document.getElementById('tm_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function area_box1() {
    let box1_value = document.getElementById('area_box-1').value;
    let box2_value = document.getElementById('area_box-2').value;
    let op1 = document.getElementById('area_select-1').value;
    let op2 = document.getElementById('area_select-2').value;
    if (op1 == "Square Meters" && op2 == "Square Meters") {
        document.getElementById('area_box-2').value = box1_value;
    }
    else if (op1 == "Square Meters" && op2 == "Square Feet") {
        box2_value = box1_value * 10.764;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Meters" && op2 == "Square Inches") {
        box2_value = box1_value * 1550.0031;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Meters" && op2 == "Acres") {
        box2_value = box1_value * 0.00024711;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Meters") {
        box2_value = box1_value * 0.092903;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Feet") {
        document.getElementById('area_box-2').value = box1_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Inches") {
        box2_value = box1_value * 144;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Feet" && op2 == "Acres") {
        box2_value = box1_value * 0.00002296;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Inches" && op2 == "Square Meters") {
        box2_value = box1_value * 0.00064516;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Inches" && op2 == "Square Feet") {
        box2_value = box1_value * 0.00694444;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Square Inches" && op2 == "Square Inches") {
        document.getElementById('area_box-2').value = box1_value;
    }
    else if (op1 == "Square Inches" && op2 == "Acres") {
        box2_value = box1_value * 0.000000159;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Acres" && op2 == "Square Meters") {
        box2_value = box1_value * 4046.86;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Acres" && op2 == "Square Feet") {
        box2_value = box1_value * 43560;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Acres" && op2 == "Square Inches") {
        box2_value = box1_value * 6272640;
        document.getElementById('area_box-2').value = box2_value;
    }
    else if (op1 == "Acres" && op2 == "Acres") {
        document.getElementById('area_box-2').value = box1_value;
    }
    area_his_show();
}

function area_box2() {
    let box1_value = document.getElementById('area_box-1').value;
    let box2_value = document.getElementById('area_box-2').value;
    let op1 = document.getElementById('area_select-1').value;
    let op2 = document.getElementById('area_select-2').value;
    if (op1 == "Square Meters" && op2 == "Square Meters") {
        document.getElementById('area_box-1').value = box2_value;
    }
    else if (op1 == "Square Meters" && op2 == "Square Feet") {
        box1_value = box2_value * 10.764;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Meters" && op2 == "Square Inches") {
        box1_value = box2_value * 1550.0031;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Meters" && op2 == "Acres") {
        box1_value = box2_value * 0.00024711;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Meters") {
        box1_value = box2_value * 0.092903;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Feet") {
        document.getElementById('area_box-1').value = box2_value;
    }
    else if (op1 == "Square Feet" && op2 == "Square Inches") {
        box1_value = box2_value * 144;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Feet" && op2 == "Acres") {
        box1_value = box2_value * 0.00002296;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Inches" && op2 == "Square Meters") {
        box1_value = box2_value * 0.00064516;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Inches" && op2 == "Square Feet") {
        box1_value = box2_value * 0.00694444;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Square Inches" && op2 == "Acres") {
        box1_value = box2_value * 0.000000159;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Acres" && op2 == "Square Meters") {
        box1_value = box2_value * 4046.86;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Acres" && op2 == "Square Feet") {
        box1_value = box2_value * 43560;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Acres" && op2 == "Square Inches") {
        box1_value = box2_value * 6272640;
        document.getElementById('area_box-1').value = box1_value;
    }
    else if (op1 == "Acres" && op2 == "Acres") {
        document.getElementById('area_box-1').value = box2_value;
    }
    area_his_show2();
}

function area_his_show() {
    let box1_value = document.getElementById('area_box-1').value;
    let box2_value = document.getElementById('area_box-2').value;
    let op1 = document.getElementById('area_select-1').value;
    let op2 = document.getElementById('area_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function area_his_show2() {
    let box1_value = document.getElementById('area_box-1').value;
    let box2_value = document.getElementById('area_box-2').value;
    let op1 = document.getElementById('area_select-1').value;
    let op2 = document.getElementById('area_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function energy_box1() {
    let box1_value = document.getElementById('energy_box-1').value;
    let box2_value = document.getElementById('energy_box-2').value;
    let op1 = document.getElementById('energy_select-1').value;
    let op2 = document.getElementById('energy_select-2').value;
    if (op1 == "Joules" && op2 == "Joules") {
        document.getElementById('energy_box-2').value = box1_value;
    }
    else if (op1 == "Joules" && op2 == "Calories") {
        box2_value = box1_value * 0.239006;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Joules" && op2 == "Electronvolts") {
        box2_value = box1_value * 6.242e+18;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Joules" && op2 == "Kilowatt Hours") {
        box2_value = box1_value * 2.7778e-7;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Calories" && op2 == "Joules") {
        box2_value = box1_value * 4.184;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Calories" && op2 == "Calories") {
        document.getElementById('energy_box-2').value = box1_value;
    }
    else if (op1 == "Calories" && op2 == "Electronvolts") {
        box2_value = box1_value * 2.611e+19;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Calories" && op2 == "Kilowatt Hours") {
        box2_value = box1_value * 1.162e-6;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Joules") {
        box2_value = box1_value * 1.602e-19;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Calories") {
        box2_value = box1_value * 3.826e-20;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Electronvolts") {
        document.getElementById('energy_box-2').value = box1_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Kilowatt Hours") {
        box2_value = box1_value * 4.45e-26;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Joules") {
        box2_value = box1_value * 3.6e+6;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Calories") {
        box2_value = box1_value * 860.421;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Electronvolts") {
        box2_value = box1_value * 2.247e+25;
        document.getElementById('energy_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Kilowatt Hours") {
        document.getElementById('energy_box-2').value = box1_value;
    }
    energy_his_show();
}

function energy_box2() {
    let box1_value = document.getElementById('energy_box-1').value;
    let box2_value = document.getElementById('energy_box-2').value;
    let op1 = document.getElementById('energy_select-1').value;
    let op2 = document.getElementById('energy_select-2').value;
    if (op1 == "Joules" && op2 == "Joules") {
        document.getElementById('energy_box-1').value = box2_value;
    }
    else if (op1 == "Joules" && op2 == "Calories") {
        box1_value = box2_value * 0.239006;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Joules" && op2 == "Electronvolts") {
        box1_value = box2_value * 6.242e+18;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Joules" && op2 == "Kilowatt Hours") {
        box1_value = box2_value * 2.7778e-7;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Calories" && op2 == "Joules") {
        box1_value = box2_value * 4.184;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Calories" && op2 == "Calories") {
        document.getElementById('energy_box-1').value = box2_value;
    }
    else if (op1 == "Calories" && op2 == "Electronvolts") {
        box1_value = box2_value * 2.611e+19;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Calories" && op2 == "Kilowatt Hours") {
        box1_value = box2_value * 1.162e-6;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Joules") {
        box1_value = box2_value * 1.602e-19;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Calories") {
        box1_value = box2_value * 3.826e-20;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Electronvolts") {
        document.getElementById('energy_box-1').value = box2_value;
    }
    else if (op1 == "Electronvolts" && op2 == "Kilowatt Hours") {
        box1_value = box2_value * 4.45e-26;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Joules") {
        box1_value = box2_value * 3.6e+6;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Calories") {
        box1_value = box2_value * 860.421;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Electronvolts") {
        box1_value = box2_value * 2.247e+25;
        document.getElementById('energy_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt Hours" && op2 == "Kilowatt Hours") {
        document.getElementById('energy_box-1').value = box2_value;
    }
    energy_his_show2();
}
function energy_his_show() {
    let box1_value = document.getElementById('energy_box-1').value;
    let box2_value = document.getElementById('energy_box-2').value;
    let op1 = document.getElementById('energy_select-1').value;
    let op2 = document.getElementById('energy_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function energy_his_show2() {
    let box1_value = document.getElementById('energy_box-1').value;
    let box2_value = document.getElementById('energy_box-2').value;
    let op1 = document.getElementById('energy_select-1').value;
    let op2 = document.getElementById('energy_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function volume_box1() {
    let box1_value = document.getElementById('volume_box-1').value;
    let box2_value = document.getElementById('volume_box-2').value;
    let op1 = document.getElementById('volume_select-1').value;
    let op2 = document.getElementById('volume_select-2').value;
    if (op1 == "Liters" && op2 == "Liters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Liters" && op2 == "Milliliters") {
        box2_value = box1_value * 1000;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Liters" && op2 == "Cubic Meters") {
        box2_value = box1_value * 0.001;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Liters" && op2 == "Gallons") {
        box2_value = box1_value * 0.264172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Liters") {
        box2_value = box1_value * 0.001;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Milliliters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Milliliters" && op2 == "Cubic Meters") {
        box2_value = box1_value * 1e-6;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Gallons") {
        box2_value = box1_value * 0.000264172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Liters") {
        box2_value = box1_value * 1000;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Milliliters") {
        box2_value = box1_value * 1e+6;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Cubic Meters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Gallons") {
        box2_value = box1_value * 264.172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Liters") {
        box2_value = box1_value * 3.78541;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Milliliters") {
        box2_value = box1_value * 3785.41;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Cubic Meters") {
        box2_value = box1_value * 0.00378541;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Gallons") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    volume_his_show();
}

function volume_box2() {
    let box1_value = document.getElementById('volume_box-1').value;
    let box2_value = document.getElementById('volume_box-2').value;
    let op1 = document.getElementById('volume_select-1').value;
    let op2 = document.getElementById('volume_select-2').value;
    if (op1 == "Liters" && op2 == "Liters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Liters" && op2 == "Milliliters") {
        box2_value = box1_value * 1000;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Liters" && op2 == "Cubic Meters") {
        box2_value = box1_value * 0.001;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Liters" && op2 == "Gallons") {
        box2_value = box1_value * 0.264172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Liters") {
        box2_value = box1_value * 0.001;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Milliliters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Milliliters" && op2 == "Cubic Meters") {
        box2_value = box1_value * 1e-6;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Milliliters" && op2 == "Gallons") {
        box2_value = box1_value * 0.000264172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Liters") {
        box2_value = box1_value * 1000;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Milliliters") {
        box2_value = box1_value * 1e+6;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Cubic Meters") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    else if (op1 == "Cubic Meters" && op2 == "Gallons") {
        box2_value = box1_value * 264.172;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Liters") {
        box2_value = box1_value * 3.78541;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Milliliters") {
        box2_value = box1_value * 3785.41;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Cubic Meters") {
        box2_value = box1_value * 0.00378541;
        document.getElementById('volume_box-2').value = box2_value;
    }
    else if (op1 == "Gallons" && op2 == "Gallons") {
        document.getElementById('volume_box-2').value = box1_value;
    }
    volume_his_show2();
}

function volume_his_show() {
    let box1_value = document.getElementById('volume_box-1').value;
    let box2_value = document.getElementById('volume_box-2').value;
    let op1 = document.getElementById('volume_select-1').value;
    let op2 = document.getElementById('volume_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function volume_his_show2() {
    let box1_value = document.getElementById('volume_box-1').value;
    let box2_value = document.getElementById('volume_box-2').value;
    let op1 = document.getElementById('volume_select-1').value;
    let op2 = document.getElementById('volume_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function speed_box1() {
    let box1_value = document.getElementById('speed_box-1').value;
    let box2_value = document.getElementById('speed_box-2').value;
    let op1 = document.getElementById('speed_select-1').value;
    let op2 = document.getElementById('speed_select-2').value;
    if (op1 == "Meters per Second" && op2 == "Meters per Second") {
        document.getElementById('speed_box-2').value = box1_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Kilometers per Hour") {
        box2_value = box1_value * 3.6;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Miles per Hour") {
        box2_value = box1_value * 2.23694;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Feet per Second") {
        box2_value = box1_value * 3.28084;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Knots") {
        box2_value = box1_value * 1.94384;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Mach") {
        box2_value = box1_value * 0.00293858;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Kilometers per Hour" && op2 == "Meters per Second") {
        box2_value = box1_value * 0.277778;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Kilometers per Hour") {
        document.getElementById('speed_box-2').value = box1_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Miles per Hour") {
        box2_value = box1_value * 0.621371;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Feet per Second") {
        box2_value = box1_value * 0.911344;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Knots") {
        box2_value = box1_value * 0.539957;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Mach") {
        box2_value = box1_value * 0.000816421;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Miles per Hour" && op2 == "Miles per Hour") {
        document.getElementById('speed_box-2').value = box1_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Meters per Second") {
        box2_value = box1_value * 0.44704;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Kilometers per Hour") {
        box2_value = box1_value * 1.60934;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Feet per Second") {
        box2_value = box1_value * 1.46667;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Knots") {
        box2_value = box1_value * 0.868976;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Mach") {
        box2_value = box1_value * 0.00131475;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Feet per Second" && op2 == "Feet per Second") {
        document.getElementById('speed_box-2').value = box1_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Meters per Second") {
        box2_value = box1_value * 0.3048;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Kilometers per Hour") {
        box2_value = box1_value * 1.09728;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Miles per Hour") {
        box2_value = box1_value * 0.681818;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Knots") {
        box2_value = box1_value * 0.592484;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Mach") {
        box2_value = box1_value * 0.000887259;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Knots" && op2 == "Knots") {
        document.getElementById('speed_box-2').value = box1_value;
    }
    else if (op1 == "Knots" && op2 == "Feet per Second") {
        box2_value = box1_value * 1.68781;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Knots" && op2 == "Meters per Second") {
        box2_value = box1_value * 0.514444;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Knots" && op2 == "Kilometers per Hour") {
        box2_value = box1_value * 1.852;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Knots" && op2 == "Miles per Hour") {
        box2_value = box1_value * 1.15078;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Knots" && op2 == "Mach") {
        box2_value = box1_value * 0.00130332;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Mach" && op2 == "Mach") {
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Mach" && op2 == "Feet per Second") {
        box2_value = box1_value * 1116.43700787;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Mach" && op2 == "Meters per Second") {
        box2_value = box1_value * 340.29;
        document.getElementById('speed_box-2').value = box2_value;
    }

    else if (op1 == "Mach" && op2 == "Kilometers per Hour") {
        box2_value = box1_value * 1225.08;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Mach" && op2 == "Miles per Hour") {
        box2_value = box1_value * 761.2;
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Mach" && op2 == "Knots") {
        box2_value = box1_value * 661.47;
        document.getElementById('speed_box-2').value = box2_value;
    }
    speed_his_show();
}
function speed_box2() {
    let box1_value = document.getElementById('speed_box-1').value;
    let box2_value = document.getElementById('speed_box-2').value;
    let op1 = document.getElementById('speed_select-1').value;
    let op2 = document.getElementById('speed_select-2').value;
    if (op1 == "Kilometers per Hour" && op2 == "Kilometers per Hour") {
        document.getElementById('speed_box-2').value = box2_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Miles per Hour") {
        box1_value = box2_value * 1.60934;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Knots") {
        box1_value = box2_value * 1.852;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Feet per Second") {
        box1_value = box2_value * 3.6;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Kilometers per Hour" && op2 == "Meters per Second") {
        box1_value = box2_value * 3.6;
        document.getElementById('speed_box-2').value = box1_value;
    }

    else if (op1 == "Kilometers per Hour" && op2 == "Mach") {
        box1_value = box2_value * 1225.08;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Miles per Hour" && op2 == "Miles per Hour") {
        document.getElementById('speed_box-1').value = box2_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Kilometers per Hour") {
        box1_value = box2_value * 0.621371;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Knots") {
        box1_value = box2_value * 1.15078;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Feet per Second") {
        box1_value = box2_value * 0.681818;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Miles per Hour" && op2 == "Meters per Second") {
        box1_value = box2_value * 2.23694;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Miles per Hour" && op2 == "Mach") {
        box1_value = box2_value * 761.207;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Feet per Second" && op2 == "Feet per Second") {
        document.getElementById('speed_box-1').value = box2_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Miles per Hour") {
        box1_value = box2_value * 1.46667;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Kilometers per Hour") {
        box1_value = box2_value * 0.911344;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Knots") {
        box1_value = box2_value *1.68781;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Feet per Second" && op2 == "Meters per Second") {
        box1_value = box2_value * 0.3048;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Feet per Second" && op2 == "Mach") {
        box1_value = box2_value * 1125.33;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Meters per Second" && op2 == "Meters per Second") {
        document.getElementById('speed_box-1').value = box2_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Feet per Second") {
        box1_value = box2_value *0.3048;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Miles per Hour") {
        box1_value = box2_value *0.44704;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Kilometers per Hour") {
        box1_value = box2_value / 3.6;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Meters per Second" && op2 == "Knots") {
        box1_value = box2_value * 0.514444;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Meters per Second" && op2 == "Mach") {
        box1_value = box2_value *340.29;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Knots" && op2 == "Knots") {
        document.getElementById('speed_box-1').value = box2_value;
    }
    else if (op1 == "Knots" && op2 == "Meters per Second") {
        box1_value = box2_value *1.94384;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Knots" && op2 == "Feet per Second") {
        box1_value = box2_value *0.592484;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Knots" && op2 == "Miles per Hour") {
        box1_value = box2_value *0.868976;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Knots" && op2 == "Kilometers per Hour") {
        box1_value = box2_value *0.539957;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Knots" && op2 == "Mach") {
        box1_value = box2_value *661.47;
        document.getElementById('speed_box-1').value = box1_value;
    }

    else if (op1 == "Mach" && op2 == "Mach") {
        document.getElementById('speed_box-1').value = box2_value;
    }
    else if (op1 == "Mach" && op2 == "Meters per Second") {
        box1_value = box2_value *0.00293858;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Mach" && op2 == "Feet per Second") {
        box1_value = box2_value *0.000887259;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Mach" && op2 == "Miles per Hour") {
        box1_value = box2_value *0.00131475;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Mach" && op2 == "Kilometers per Hour") {
        box1_value = box2_value *0.000816421;
        document.getElementById('speed_box-1').value = box1_value;
    }
    else if (op1 == "Mach" && op2 == "Knots") {
        box1_value = box2_value *0.00130332;
        document.getElementById('speed_box-1').value = box1_value;
    }

    speed_his_show2();
}

function speed_his_show() {
    let box1_value = document.getElementById('speed_box-1').value;
    let box2_value = document.getElementById('speed_box-2').value;
    let op1 = document.getElementById('speed_select-1').value;
    let op2 = document.getElementById('speed_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function speed_his_show2() {
    let box1_value = document.getElementById('speed_box-1').value;
    let box2_value = document.getElementById('speed_box-2').value;
    let op1 = document.getElementById('speed_select-1').value;
    let op2 = document.getElementById('speed_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function pressure_box1() {
    let box1_value = document.getElementById('pressure_box-1').value;
    let box2_value = document.getElementById('pressure_box-2').value;
    let op1 = document.getElementById('pressure_select-1').value;
    let op2 = document.getElementById('pressure_select-2').value;
    if (op1 == "Pascal" && op2 == "Pascal") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    else if (op1 == "Pascal" && op2 == "Hectopascal") {
        box2_value = box1_value * 0.01;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Pascal" && op2 == "Kilopascal") {
        box2_value = box1_value * 0.001;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Pascal" && op2 == "Bar") {
        box2_value = box1_value * 0.00001;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Pascal" && op2 == "Atmosphere") {
        box2_value = box1_value * 9.8692e-6;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Pascal" && op2 == "Millimeter of Mercury") {
        box2_value = box1_value * 0.00750062;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Pascal") {
        box2_value = box1_value * 100;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Hectopascal") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Kilopascal") {
        box2_value = box1_value * 0.1;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Bar") {
        box2_value = box1_value * 0.001;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Atmosphere") {
        box2_value = box1_value * 0.000986923;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Millimeter of Mercury") {
        box2_value = box1_value * 0.750062;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Pascal") {
        box2_value = box1_value * 1000;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Hectopascal") {
        box2_value = box1_value * 10;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Kilopascal") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Bar") {
        box2_value = box1_value * 0.01;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Atmosphere") {
        box2_value = box1_value * 0.00986923;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Millimeter of Mercury") {
        box2_value = box1_value * 7.50062;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Pascal") {
        box2_value = box1_value * 100000;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Hectopascal") {
        box2_value = box1_value * 1000;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Kilopascal") {
        box2_value = box1_value * 100;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Bar") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Atmosphere") {
        box2_value = box1_value * 0.986923;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Millimeter of Mercury") {
        box2_value = box1_value * 750.062;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Pascal") {
        box2_value = box1_value * 101325;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Hectopascal") {
        box2_value = box1_value * 1013.25;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Kilopascal") {
        box2_value = box1_value * 101.325;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Bar") {
        box2_value = box1_value * 1.01325;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Atmosphere") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Millimeter of Mercury") {
        box2_value = box1_value * 760;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Pascal") {
        box2_value = box1_value * 133.322;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Hectopascal") {
        box2_value = box1_value * 1.33322;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Kilopascal") {
        box2_value = box1_value * 0.133322;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Bar") {
        box2_value = box1_value * 0.00133322;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Atmosphere") {
        box2_value = box1_value * 0.00131579;
        document.getElementById('pressure_box-2').value = box2_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Millimeter of Mercury") {
        document.getElementById('pressure_box-2').value = box1_value;
    }
    
    pressure_his_show();
    
    
    
}

function pressure_box2() {
    let box1_value = document.getElementById('pressure_box-1').value;
    let box2_value = document.getElementById('pressure_box-2').value;
    let op1 = document.getElementById('pressure_select-1').value;
    let op2 = document.getElementById('pressure_select-2').value;
    if (op1 == "Pascal" && op2 == "Pascal") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    else if (op1 == "Pascal" && op2 == "Hectopascal") {
        box1_value = box2_value * 100;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Pascal" && op2 == "Kilopascal") {
        box1_value = box2_value * 1000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Pascal" && op2 == "Bar") {
        box1_value = box2_value *100000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Pascal" && op2 == "Atmosphere") {
        box1_value = box2_value * 101325;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Pascal" && op2 == "Millimeter of Mercury") {
        box1_value = box2_value * 133.322;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Pascal") {
        box1_value = box2_value * 0.01;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Hectopascal") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Kilopascal") {
        box1_value = box2_value * 10;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Bar") {
        box1_value = box2_value * 1000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Atmosphere") {
        box1_value = box2_value * 1013.25;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Hectopascal" && op2 == "Millimeter of Mercury") {
        box1_value = box2_value * 1.33322;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Pascal") {
        box1_value = box2_value / 1000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Hectopascal") {
        box1_value = box2_value / 10;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Kilopascal") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Bar") {
        box1_value = box2_value * 100;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Atmosphere") {
        box1_value = box2_value * 101.325;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Kilopascal" && op2 == "Millimeter of Mercury") {
        box1_value = box2_value * 0.133322;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Pascal") {
        box1_value = box2_value / 100000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Hectopascal") {
        box1_value = box2_value / 1000;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Kilopascal") {
        box1_value = box2_value / 100;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Bar") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    else if (op1 == "Bar" && op2 == "Atmosphere") {
        box1_value = box2_value *1.01325;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Bar" && op2 == "Millimeter of Mercury") {
        box1_value = box2_value * 0.00133322;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Pascal") {
        box1_value = box2_value *0.0000098692;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Hectopascal") {
        box1_value = box2_value * 0.000986923;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Kilopascal") {
        box1_value = box2_value * 0.00986923;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Bar") {
        box1_value = box2_value * 0.986923;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Atmosphere") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    else if (op1 == "Atmosphere" && op2 == "Millimeter of Mercury") {
        box1_value = box2_value * 0.00131579;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Pascal") {
        box1_value = box2_value * 0.00750062;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Hectopascal") {
        box1_value = box2_value * 0.750062;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Kilopascal") {
        box1_value = box2_value * 7.50062;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Bar") {
        box1_value = box2_value * 750.062;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Atmosphere") {
        box1_value = box2_value * 760;
        document.getElementById('pressure_box-1').value = box1_value;
    }
    else if (op1 == "Millimeter of Mercury" && op2 == "Millimeter of Mercury") {
        document.getElementById('pressure_box-1').value = box2_value;
    }
    pressure_his_show2();
    
    
    
    
}
function pressure_his_show() {
    let box1_value = document.getElementById('pressure_box-1').value;
    let box2_value = document.getElementById('pressure_box-2').value;
    let op1 = document.getElementById('pressure_select-1').value;
    let op2 = document.getElementById('pressure_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function pressure_his_show2() {
    let box1_value = document.getElementById('pressure_box-1').value;
    let box2_value = document.getElementById('pressure_box-2').value;
    let op1 = document.getElementById('pressure_select-1').value;
    let op2 = document.getElementById('pressure_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function storage_box1() {
    let box1_value = document.getElementById('storage_box-1').value;
    let box2_value = document.getElementById('storage_box-2').value;
    let op1 = document.getElementById('storage_select-1').value;
    let op2 = document.getElementById('storage_select-2').value;
    if (op1 == "Bit" && op2 == "Bit") {
        document.getElementById('storage_box-2').value = box1_value;
    }
    else if (op1 == "Bit" && op2 == "Byte") {
        box2_value = box1_value / 8;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Bit" && op2 == "Kilobyte") {
        box2_value = box1_value / 8000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Bit" && op2 == "Megabyte") {
        box2_value = box1_value / 8e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Bit" && op2 == "Gigabyte") {
        box2_value = box1_value / 8e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Bit" && op2 == "Terabyte") {
        box2_value = box1_value / 8e+12;
        document.getElementById('storage_box-2').value = box2_value;
    }

    else if (op1 == "Byte" && op2 == "Bit") {
        box2_value = box1_value * 8;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Byte" && op2 == "Byte") {
        document.getElementById('storage_box-2').value = box1_value;
    }
    else if (op1 == "Byte" && op2 == "Kilobyte") {
        box2_value = box1_value / 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Byte" && op2 == "Megabyte") {
        box2_value = box1_value / 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Byte" && op2 == "Gigabyte") {
        box2_value = box1_value / 1e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Byte" && op2 == "Terabyte") {
        box2_value = box1_value / 1e+12;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Bit") {
        box2_value = box1_value * 8000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Byte") {
        box2_value = box1_value * 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Kilobyte") {
        document.getElementById('storage_box-2').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Megabyte") {
        box2_value = box1_value / 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Gigabyte") {
        box2_value = box1_value / 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Terabyte") {
        box2_value = box1_value / 1e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Bit") {
        box2_value = box1_value * 8e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Byte") {
        box2_value = box1_value * 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Kilobyte") {
        box2_value = box1_value * 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Megabyte") {
        document.getElementById('storage_box-2').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Gigabyte") {
        box2_value = box1_value / 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Terabyte") {
        box2_value = box1_value / 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Bit") {
        box2_value = box1_value * 8e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Byte") {
        box2_value = box1_value * 1e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Kilobyte") {
        box2_value = box1_value * 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Megabyte") {
        box2_value = box1_value * 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Gigabyte") {
        document.getElementById('storage_box-2').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Terabyte") {
        box2_value = box1_value / 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Bit") {
        box2_value = box1_value * 8e+12;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Byte") {
        box2_value = box1_value * 1e+12;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Kilobyte") {
        box2_value = box1_value * 1e+9;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Megabyte") {
        box2_value = box1_value * 1e+6;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Gigabyte") {
        box2_value = box1_value * 1000;
        document.getElementById('storage_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte" && op2 == "Terabyte") {
        document.getElementById('storage_box-2').value = box1_value;
    }  
    storage_his_show();  
}



function storage_box2() {
    let box1_value = document.getElementById('storage_box-1').value;
    let box2_value = document.getElementById('storage_box-2').value;
    let op1 = document.getElementById('storage_select-1').value;
    let op2 = document.getElementById('storage_select-2').value;
    if (op1 == "Bit" && op2 == "Bit") {
        document.getElementById('storage_box-1').value = box2_value;
    }
    else if (op1 == "Bit" && op2 == "Byte") {
        box1_value = box2_value * 8;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Bit" && op2 == "Kilobyte") {
        box1_value = box2_value * 8000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Bit" && op2 == "Megabyte") {
        box1_value = box2_value * 8e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Bit" && op2 == "Gigabyte") {
        box1_value = box2_value * 8e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Bit" && op2 == "Terabyte") {
        box1_value = box2_value * 8e+12;
        document.getElementById('storage_box-1').value = box1_value;
    }

    else if (op1 == "Byte" && op2 == "Bit") {
        box1_value = box2_value / 8;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Byte" && op2 == "Byte") {
        document.getElementById('storage_box-1').value = box2_value;
    }
    else if (op1 == "Byte" && op2 == "Kilobyte") {
        box1_value = box2_value * 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Byte" && op2 == "Megabyte") {
        box1_value = box2_value * 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Byte" && op2 == "Gigabyte") {
        box1_value = box2_value * 1e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Byte" && op2 == "Terabyte") {
        box1_value = box2_value * 1e+12;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Bit") {
        box1_value = box2_value / 8000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Byte") {
        box1_value = box2_value / 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Kilobyte") {
        document.getElementById('storage_box-1').value = box2_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Megabyte") {
        box1_value = box2_value * 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Gigabyte") {
        box1_value = box2_value * 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte" && op2 == "Terabyte") {
        box1_value = box2_value * 1e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Bit") {
        box1_value = box2_value / 8e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Byte") {
        box1_value = box2_value / 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Kilobyte") {
        box1_value = box2_value / 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Megabyte") {
        document.getElementById('storage_box-1').value = box2_value;
    }
    else if (op1 == "Megabyte" && op2 == "Gigabyte") {
        box1_value = box2_value * 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte" && op2 == "Terabyte") {
        box1_value = box2_value * 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Bit") {
        box1_value = box2_value / 8e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Byte") {
        box1_value = box2_value / 1e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Kilobyte") {
        box1_value = box2_value / 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Megabyte") {
        box1_value = box2_value / 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Gigabyte") {
        document.getElementById('storage_box-1').value = box2_value;
    }
    else if (op1 == "Gigabyte" && op2 == "Terabyte") {
        box1_value = box2_value * 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Bit") {
        box1_value = box2_value / 8e+12;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Byte") {
        box1_value = box2_value / 1e+12;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Kilobyte") {
        box1_value = box2_value / 1e+9;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Megabyte") {
        box1_value = box2_value / 1e+6;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Gigabyte") {
        box1_value = box2_value / 1000;
        document.getElementById('storage_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte" && op2 == "Terabyte") {
        document.getElementById('storage_box-1').value = box2_value;
    } 
    storage_his_show2();
}
function storage_his_show() {
    let box1_value = document.getElementById('storage_box-1').value;
    let box2_value = document.getElementById('storage_box-2').value;
    let op1 = document.getElementById('storage_select-1').value;
    let op2 = document.getElementById('storage_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function storage_his_show2() {
    let box1_value = document.getElementById('storage_box-1').value;
    let box2_value = document.getElementById('storage_box-2').value;
    let op1 = document.getElementById('storage_select-1').value;
    let op2 = document.getElementById('storage_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function transfer_rate_box1() {
    let box1_value = document.getElementById('transfer_rate_box-1').value;
    let box2_value = document.getElementById('transfer_rate_box-2').value;
    let op1 = document.getElementById('transfer_rate_select-1').value;
    let op2 = document.getElementById('transfer_rate_select-2').value;
    if (op1 == "Bit/s" && op2 == "Bit/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Bit/s" && op2 == "Byte/s") {
        box2_value = box1_value / 8;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Bit/s" && op2 == "Kilobyte/s") {
        box2_value = box1_value / 8000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Bit/s" && op2 == "Megabyte/s") {
        box2_value = box1_value / 8e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Bit/s" && op2 == "Gigabyte/s") {
        box2_value = box1_value / 8e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Bit/s" && op2 == "Terabyte/s") {
        box2_value = box1_value / 8e+12;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Byte/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Bit/s") {
        box2_value = box1_value * 8;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Kilobyte/s") {
        box2_value = box1_value / 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Megabyte/s") {
        box2_value = box1_value / 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Gigabyte/s") {
        box2_value = box1_value / 1e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Terabyte/s") {
        box2_value = box1_value / 1e+12;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Kilobyte/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Bit/s") {
        box2_value = box1_value * 8000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Byte/s") {
        box2_value = box1_value * 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Megabyte/s") {
        box2_value = box1_value / 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Gigabyte/s") {
        box2_value = box1_value / 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Terabyte/s") {
        box2_value = box1_value / 1e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Megabyte/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Bit/s") {
        box2_value = box1_value * 8e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Byte/s") {
        box2_value = box1_value * 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Kilobyte/s") {
        box2_value = box1_value * 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Gigabyte/s") {
        box2_value = box1_value / 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Terabyte/s") {
        box2_value = box1_value / 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Gigabyte/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Bit/s") {
        box2_value = box1_value * 8e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Byte/s") {
        box2_value = box1_value * 1e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Kilobyte/s") {
        box2_value = box1_value * 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Megabyte/s") {
        box2_value = box1_value * 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Terabyte/s") {
        box2_value = box1_value / 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Terabyte/s") {
        document.getElementById('transfer_rate_box-2').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Bit/s") {
        box2_value = box1_value * 8e+12;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Byte/s") {
        box2_value = box1_value * 1e+12;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Kilobyte/s") {
        box2_value = box1_value * 1e+9;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Megabyte/s") {
        box2_value = box1_value * 1e+6;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Gigabyte/s") {
        box2_value = box1_value * 1000;
        document.getElementById('transfer_rate_box-2').value = box2_value;
    }
    data_transfer_his_show();
}

function transfer_rate_box2() {
    let box1_value = document.getElementById('transfer_rate_box-1').value;
    let box2_value = document.getElementById('transfer_rate_box-2').value;
    let op1 = document.getElementById('transfer_rate_select-1').value;
    let op2 = document.getElementById('transfer_rate_select-2').value;
    if (op1 == "Bit/s" && op2 == "Bit/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    else if (op1 == "Bit/s" && op2 == "Byte/s") {
        box1_value = box2_value * 8;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Bit/s" && op2 == "Kilobyte/s") {
        box1_value = box2_value * 8000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Bit/s" && op2 == "Megabyte/s") {
        box1_value = box2_value * 8e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Bit/s" && op2 == "Gigabyte/s") {
        box1_value = box2_value * 8e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Bit/s" && op2 == "Terabyte/s") {
        box1_value = box2_value * 8e+12;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Bit/s") {
        box1_value = box2_value / 8;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Byte/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    else if (op1 == "Byte/s" && op2 == "Kilobyte/s") {
        box1_value = box2_value * 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Megabyte/s") {
        box1_value = box2_value * 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Gigabyte/s") {
        box1_value = box2_value * 1e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Byte/s" && op2 == "Terabyte/s") {
        box1_value = box2_value * 1e+12;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Bit/s") {
        box1_value = box2_value / 8000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Byte/s") {
        box1_value = box2_value / 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Kilobyte/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Megabyte/s") {
        box1_value = box2_value * 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Gigabyte/s") {
        box1_value = box2_value * 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Kilobyte/s" && op2 == "Terabyte/s") {
        box1_value = box2_value * 1e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Bit/s") {
        box1_value = box2_value / 8e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Byte/s") {
        box1_value = box2_value / 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Kilobyte/s") {
        box1_value = box2_value / 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Megabyte/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Gigabyte/s") {
        box1_value = box2_value * 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Megabyte/s" && op2 == "Terabyte/s") {
        box1_value = box2_value * 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Bit/s") {
        box1_value = box2_value / 8e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Byte/s") {
        box1_value = box2_value / 1e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Kilobyte/s") {
        box1_value = box2_value / 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Megabyte/s") {
        box1_value = box2_value / 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Gigabyte/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    else if (op1 == "Gigabyte/s" && op2 == "Terabyte/s") {
        box1_value = box2_value * 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Bit/s") {
        box1_value = box2_value / 8e+12;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Byte/s") {
        box1_value = box2_value / 1e+12;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Kilobyte/s") {
        box1_value = box2_value / 1e+9;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Megabyte/s") {
        box1_value = box2_value / 1e+6;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Gigabyte/s") {
        box1_value = box2_value / 1000;
        document.getElementById('transfer_rate_box-1').value = box1_value;
    }
    else if (op1 == "Terabyte/s" && op2 == "Terabyte/s") {
        document.getElementById('transfer_rate_box-1').value = box2_value;
    }
    data_transfer_his_show2();
}

function data_transfer_his_show() {
    let box1_value = document.getElementById('transfer_rate_box-1').value;
    let box2_value = document.getElementById('transfer_rate_box-2').value;
    let op1 = document.getElementById('transfer_rate_select-1').value;
    let op2 = document.getElementById('transfer_rate_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function data_transfer_his_show2() {
    let box1_value = document.getElementById('transfer_rate_box-1').value;
    let box2_value = document.getElementById('transfer_rate_box-2').value;
    let op1 = document.getElementById('transfer_rate_select-1').value;
    let op2 = document.getElementById('transfer_rate_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function angle_box1() {
    let box1_value = document.getElementById('angle_box-1').value;
    let box2_value = document.getElementById('angle_box-2').value;
    let op1 = document.getElementById('angle_select-1').value;
    let op2 = document.getElementById('angle_select-2').value;
    
    if (op1 == "Degree" && op2 == "Degree") {
        document.getElementById('angle_box-2').value = box1_value;
    }
    else if (op1 == "Degree" && op2 == "Radian") {
        box2_value = box1_value * (Math.PI / 180);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Degree" && op2 == "Gradian") {
        box2_value = box1_value * (10 / 9);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Radian" && op2 == "Degree") {
        box2_value = box1_value * (180 / Math.PI);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Radian" && op2 == "Radian") {
        document.getElementById('angle_box-2').value = box1_value;
    }
    else if (op1 == "Radian" && op2 == "Gradian") {
        box2_value = box1_value * (200 / Math.PI);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Gradian" && op2 == "Degree") {
        box2_value = box1_value * (9 / 10);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Gradian" && op2 == "Radian") {
        box2_value = box1_value * (Math.PI / 200);
        document.getElementById('angle_box-2').value = box2_value;
    }
    else if (op1 == "Gradian" && op2 == "Gradian") {
        document.getElementById('angle_box-2').value = box1_value;
    }
    angle_his_show();
}

function angle_box2() {
    let box1_value = document.getElementById('angle_box-1').value;
    let box2_value = document.getElementById('angle_box-2').value;
    let op1 = document.getElementById('angle_select-1').value;
    let op2 = document.getElementById('angle_select-2').value;
    
    if (op1 == "Degree" && op2 == "Degree") {
        document.getElementById('angle_box-1').value = box2_value;
    }
    else if (op1 == "Degree" && op2 == "Radian") {
        box1_value = box2_value * (180 / Math.PI);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Degree" && op2 == "Gradian") {
        box1_value = box2_value / (10 / 9);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Radian" && op2 == "Degree") {
        box1_value = box2_value * (Math.PI / 180);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Radian" && op2 == "Radian") {
        document.getElementById('angle_box-1').value = box2_value;
    }
    else if (op1 == "Radian" && op2 == "Gradian") {
        box1_value = box2_value / (200 / Math.PI);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Gradian" && op2 == "Degree") {
        box1_value = box2_value / (9 / 10);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Gradian" && op2 == "Radian") {
        box1_value = box2_value * (Math.PI / 200);
        document.getElementById('angle_box-1').value = box1_value;
    }
    else if (op1 == "Gradian" && op2 == "Gradian") {
        document.getElementById('angle_box-1').value = box2_value;
    }
    angle_his_show2();
}

function angle_his_show() {
    let box1_value = document.getElementById('angle_box-1').value;
    let box2_value = document.getElementById('angle_box-2').value;
    let op1 = document.getElementById('angle_select-1').value;
    let op2 = document.getElementById('angle_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function angle_his_show2() {
    let box1_value = document.getElementById('angle_box-1').value;
    let box2_value = document.getElementById('angle_box-2').value;
    let op1 = document.getElementById('angle_select-1').value;
    let op2 = document.getElementById('angle_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function frequency_box1() {
    let box1_value = document.getElementById('frequency_box-1').value;
    let box2_value = document.getElementById('frequency_box-2').value;
    let op1 = document.getElementById('frequency_select-1').value;
    let op2 = document.getElementById('frequency_select-2').value;

    if (op1 == "Hertz" && op2 == "Hertz") {
        document.getElementById('frequency_box-2').value = box1_value;
    }
    else if (op1 == "Hertz" && op2 == "Kilohertz") {
        box2_value = box1_value / 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Hertz" && op2 == "Megahertz") {
        box2_value = box1_value / 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Hertz" && op2 == "Gigahertz") {
        box2_value = box1_value / 1e+9;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Hertz" && op2 == "Terahertz") {
        box2_value = box1_value / 1e+12;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Hertz") {
        box2_value = box1_value * 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Kilohertz") {
        document.getElementById('frequency_box-2').value = box1_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Megahertz") {
        box2_value = box1_value / 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Gigahertz") {
        box2_value = box1_value / 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Terahertz") {
        box2_value = box1_value / 1e+9;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Megahertz" && op2 == "Hertz") {
        box2_value = box1_value * 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Megahertz" && op2 == "Kilohertz") {
        box2_value = box1_value * 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Megahertz" && op2 == "Megahertz") {
        document.getElementById('frequency_box-2').value = box1_value;
    }
    else if (op1 == "Megahertz" && op2 == "Gigahertz") {
        box2_value = box1_value / 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Megahertz" && op2 == "Terahertz") {
        box2_value = box1_value / 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Hertz") {
        box2_value = box1_value * 1e+9;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Kilohertz") {
        box2_value = box1_value * 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Megahertz") {
        box2_value = box1_value * 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Gigahertz") {
        document.getElementById('frequency_box-2').value = box1_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Terahertz") {
        box2_value = box1_value / 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Terahertz" && op2 == "Hertz") {
        box2_value = box1_value * 1e+12;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Terahertz" && op2 == "Kilohertz") {
        box2_value = box1_value * 1e+9;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Terahertz" && op2 == "Megahertz") {
        box2_value = box1_value * 1e+6;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Terahertz" && op2 == "Gigahertz") {
        box2_value = box1_value * 1000;
        document.getElementById('frequency_box-2').value = box2_value;
    }
    else if (op1 == "Terahertz" && op2 == "Terahertz") {
        document.getElementById('frequency_box-2').value = box1_value;
    }
    frequency_his_show();
}

function frequency_box2() {
    let box1_value = document.getElementById('frequency_box-1').value;
    let box2_value = document.getElementById('frequency_box-2').value;
    let op1 = document.getElementById('frequency_select-1').value;
    let op2 = document.getElementById('frequency_select-2').value;

    if (op1 == "Hertz" && op2 == "Hertz") {
        document.getElementById('frequency_box-1').value = box2_value;
    }
    else if (op1 == "Hertz" && op2 == "Kilohertz") {
        box1_value = box2_value * 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Hertz" && op2 == "Megahertz") {
        box1_value = box2_value * 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Hertz" && op2 == "Gigahertz") {
        box1_value = box2_value * 1e+9;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Hertz" && op2 == "Terahertz") {
        box1_value = box2_value * 1e+12;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Hertz") {
        box1_value = box2_value / 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Kilohertz") {
        document.getElementById('frequency_box-1').value = box2_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Megahertz") {
        box1_value = box2_value * 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Gigahertz") {
        box1_value = box2_value * 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Kilohertz" && op2 == "Terahertz") {
        box1_value = box2_value * 1e+9;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Megahertz" && op2 == "Hertz") {
        box1_value = box2_value / 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Megahertz" && op2 == "Kilohertz") {
        box1_value = box2_value / 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Megahertz" && op2 == "Megahertz") {
        document.getElementById('frequency_box-1').value = box2_value;
    }
    else if (op1 == "Megahertz" && op2 == "Gigahertz") {
        box1_value = box2_value * 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Megahertz" && op2 == "Terahertz") {
        box1_value = box2_value * 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Hertz") {
        box1_value = box2_value / 1e+9;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Kilohertz") {
        box1_value = box2_value / 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Megahertz") {
        box1_value = box2_value / 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Gigahertz") {
        document.getElementById('frequency_box-1').value = box2_value;
    }
    else if (op1 == "Gigahertz" && op2 == "Terahertz") {
        box1_value = box2_value * 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Terahertz" && op2 == "Hertz") {
        box1_value = box2_value / 1e+12;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Terahertz" && op2 == "Kilohertz") {
        box1_value = box2_value / 1e+9;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Terahertz" && op2 == "Megahertz") {
        box1_value = box2_value / 1e+6;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Terahertz" && op2 == "Gigahertz") {
        box1_value = box2_value / 1000;
        document.getElementById('frequency_box-1').value = box1_value;
    }
    else if (op1 == "Terahertz" && op2 == "Terahertz") {
        document.getElementById('frequency_box-1').value = box2_value;
    }
    frequency_his_show2();
}

function frequency_his_show() {
    let box1_value = document.getElementById('frequency_box-1').value;
    let box2_value = document.getElementById('frequency_box-2').value;
    let op1 = document.getElementById('frequency_select-1').value;
    let op2 = document.getElementById('frequency_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function frequency_his_show2() {
    let box1_value = document.getElementById('frequency_box-1').value;
    let box2_value = document.getElementById('frequency_box-2').value;
    let op1 = document.getElementById('frequency_select-1').value;
    let op2 = document.getElementById('frequency_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function power_box1() {
    let box1_value = document.getElementById('power_box-1').value;
    let box2_value = document.getElementById('power_box-2').value;
    let op1 = document.getElementById('power_select-1').value;
    let op2 = document.getElementById('power_select-2').value;
    
    if (op1 == "Watt" && op2 == "Watt") {
        document.getElementById('power_box-2').value = box1_value;
    }
    else if (op1 == "Watt" && op2 == "Kilowatt") {
        box2_value = box1_value / 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Watt" && op2 == "Megawatt") {
        box2_value = box1_value / 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Watt" && op2 == "Gigawatt") {
        box2_value = box1_value / 1e+9;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Watt" && op2 == "Terawatt") {
        box2_value = box1_value / 1e+12;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Watt" && op2 == "Horsepower") {
        box2_value = box1_value / 745.7; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Watt") {
        box2_value = box1_value * 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Kilowatt") {
        document.getElementById('power_box-2').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Megawatt") {
        box2_value = box1_value / 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Gigawatt") {
        box2_value = box1_value / 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Terawatt") {
        box2_value = box1_value / 1e+9;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Horsepower") {
        box2_value = box1_value * 1.341; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Watt") {
        box2_value = box1_value * 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Kilowatt") {
        box2_value = box1_value * 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Megawatt") {
        document.getElementById('power_box-2').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Gigawatt") {
        box2_value = box1_value / 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Terawatt") {
        box2_value = box1_value / 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Horsepower") {
        box2_value = box1_value * 1341.02; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Watt") {
        box2_value = box1_value * 1e+9;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Kilowatt") {
        box2_value = box1_value * 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Megawatt") {
        box2_value = box1_value * 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Gigawatt") {
        document.getElementById('power_box-2').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Terawatt") {
        box2_value = box1_value / 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Horsepower") {
        box2_value = box1_value * 1.341e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Watt") {
        box2_value = box1_value * 1e+12;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Kilowatt") {
        box2_value = box1_value * 1e+9;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Megawatt") {
        box2_value = box1_value * 1e+6;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Gigawatt") {
        box2_value = box1_value * 1000;
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Terawatt") {
        document.getElementById('power_box-2').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Horsepower") {
        box2_value = box1_value * 1.341e+9; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Watt") {
        box2_value = box1_value * 745.7; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Kilowatt") {
        box2_value = box1_value * 0.7457; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Megawatt") {
        box2_value = box1_value * 0.0007457; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Gigawatt") {
        box2_value = box1_value * 7.457e-7; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Terawatt") {
        box2_value = box1_value * 7.457e-10; 
        document.getElementById('power_box-2').value = box2_value;
    }
    else if (op1 == "Horsepower" && op2 == "Horsepower") {
        document.getElementById('power_box-2').value = box1_value;
    }
    power_his_show();
}

function power_box2() {
    let box1_value = document.getElementById('power_box-1').value;
    let box2_value = document.getElementById('power_box-2').value;
    let op1 = document.getElementById('power_select-1').value;
    let op2 = document.getElementById('power_select-2').value;

    if (op1 == "Watt" && op2 == "Watt") {
        document.getElementById('power_box-1').value = box2_value;
    }
    else if (op1 == "Watt" && op2 == "Kilowatt") {
        box1_value = box2_value / 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Watt" && op2 == "Megawatt") {
        box1_value = box2_value / 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Watt" && op2 == "Gigawatt") {
        box1_value = box2_value / 1e+9;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Watt" && op2 == "Terawatt") {
        box1_value = box2_value / 1e+12;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Watt" && op2 == "Horsepower") {
        box1_value = box2_value / 745.7; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Watt") {
        box1_value = box2_value * 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Kilowatt") {
        document.getElementById('power_box-1').value = box2_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Megawatt") {
        box1_value = box2_value / 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Gigawatt") {
        box1_value = box2_value / 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Terawatt") {
        box1_value = box2_value / 1e+9;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Kilowatt" && op2 == "Horsepower") {
        box1_value = box2_value * 1.341; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Watt") {
        box1_value = box2_value * 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Kilowatt") {
        box1_value = box2_value * 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Megawatt") {
        document.getElementById('power_box-1').value = box2_value;
    }
    else if (op1 == "Megawatt" && op2 == "Gigawatt") {
        box1_value = box2_value / 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Terawatt") {
        box1_value = box2_value / 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Megawatt" && op2 == "Horsepower") {
        box1_value = box2_value * 1341.02;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Watt") {
        box1_value = box2_value * 1e+9;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Kilowatt") {
        box1_value = box2_value * 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Megawatt") {
        box1_value = box2_value * 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Gigawatt") {
        document.getElementById('power_box-1').value = box2_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Terawatt") {
        box1_value = box2_value / 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Gigawatt" && op2 == "Horsepower") {
        box1_value = box2_value * 1.341e+6; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Watt") {
        box1_value = box2_value * 1e+12;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Kilowatt") {
        box1_value = box2_value * 1e+9;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Megawatt") {
        box1_value = box2_value * 1e+6;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Gigawatt") {
        box1_value = box2_value * 1000;
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Terawatt" && op2 == "Terawatt") {
        document.getElementById('power_box-1').value = box2_value;
    }
    else if (op1 == "Terawatt" && op2 == "Horsepower") {
        box1_value = box2_value * 1.341e+9; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Watt") {
        box1_value = box2_value * 745.7; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Kilowatt") {
        box1_value = box2_value * 0.7457; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Megawatt") {
        box1_value = box2_value * 0.0007457; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Gigawatt") {
        box1_value = box2_value * 7.457e-7; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Terawatt") {
        box1_value = box2_value * 7.457e-10; 
        document.getElementById('power_box-1').value = box1_value;
    }
    else if (op1 == "Horsepower" && op2 == "Horsepower") {
        document.getElementById('power_box-1').value = box2_value;
    }
   power_his_show2();
}

function power_his_show() {
    let box1_value = document.getElementById('power_box-1').value;
    let box2_value = document.getElementById('power_box-2').value;
    let op1 = document.getElementById('power_select-1').value;
    let op2 = document.getElementById('power_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function power_his_show2() {
    let box1_value = document.getElementById('power_box-1').value;
    let box2_value = document.getElementById('power_box-2').value;
    let op1 = document.getElementById('power_select-1').value;
    let op2 = document.getElementById('power_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}

function force_box1() {
    let box1_value = document.getElementById('force_box-1').value;
    let box2_value = document.getElementById('force_box-2').value;
    let op1 = document.getElementById('force_select-1').value;
    let op2 = document.getElementById('force_select-2').value;

    if (op1 == "Newton" && op2 == "Newton") {
        document.getElementById('force_box-2').value = box1_value;
    }
    else if (op1 == "Newton" && op2 == "Kilonewton") {
        box2_value = box1_value / 1000;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Newton" && op2 == "Dyne") {
        box2_value = box1_value * 100000;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Newton" && op2 == "Pound-force") {
        box2_value = box1_value / 4.44822; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Newton" && op2 == "Poundal") {
        box2_value = box1_value / 0.138255; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Newton" && op2 == "Kilogram-force") {
        box2_value = box1_value / 9.80665; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Newton") {
        box2_value = box1_value * 1000;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Kilonewton") {
        document.getElementById('force_box-2').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Dyne") {
        box2_value = box1_value * 1e+7;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Pound-force") {
        box2_value = box1_value / 4448.22;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Poundal") {
        box2_value = box1_value / 0.138255;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Kilogram-force") {
        box2_value = box1_value / 9.80665;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Newton") {
        box2_value = box1_value / 100000;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Kilonewton") {
        box2_value = box1_value / 1e+7;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Dyne") {
        document.getElementById('force_box-2').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Pound-force") {
        box2_value = box1_value / 444822.161; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Poundal") {
        box2_value = box1_value / 13825.5;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Kilogram-force") {
        box2_value = box1_value / 980665;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Newton") {
        box2_value = box1_value * 4.44822; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Kilonewton") {
        box2_value = box1_value * 0.00444822;
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Dyne") {
        box2_value = box1_value * 444822.161; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Pound-force") {
        document.getElementById('force_box-2').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Poundal") {
        box2_value = box1_value * 32.174; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Kilogram-force") {
        box2_value = box1_value / 2.20462; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Newton") {
        box2_value = box1_value * 0.138255; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Kilonewton") {
        box2_value = box1_value * 1.38255e-4; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Dyne") {
        box2_value = box1_value * 13825.5; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Pound-force") {
        box2_value = box1_value / 32.174; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Poundal") {
        document.getElementById('force_box-2').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Kilogram-force") {
        box2_value = box1_value / 70.9319; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Newton") {
        box2_value = box1_value * 9.80665; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Kilonewton") {
        box2_value = box1_value * 0.00980665; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Dyne") {
        box2_value = box1_value * 980665; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Pound-force") {
        box2_value = box1_value * 2.20462; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Poundal") {
        box2_value = box1_value * 70.9319; 
        document.getElementById('force_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Kilogram-force") {
        document.getElementById('force_box-2').value = box1_value;
    }
    force_his_show();
}

function force_box2() {
    let box1_value = document.getElementById('force_box-1').value;
    let box2_value = document.getElementById('force_box-2').value;
    let op1 = document.getElementById('force_select-1').value;
    let op2 = document.getElementById('force_select-2').value;

    if (op1 == "Newton" && op2 == "Newton") {
        document.getElementById('force_box-1').value = box2_value;
    }
    else if (op1 == "Newton" && op2 == "Kilonewton") {
        box1_value = box2_value * 1000;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Newton" && op2 == "Dyne") {
        box1_value = box2_value / 100000;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Newton" && op2 == "Pound-force") {
        box1_value = box2_value * 4.44822; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Newton" && op2 == "Poundal") {
        box1_value = box2_value * 0.138255; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Newton" && op2 == "Kilogram-force") {
        box1_value = box2_value * 9.80665; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Newton") {
        box1_value = box2_value / 1000;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Kilonewton") {
        document.getElementById('force_box-1').value = box2_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Dyne") {
        box1_value = box2_value / 1e+7;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Pound-force") {
        box1_value = box2_value * 0.00444822; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Poundal") {
        box1_value = box2_value * 0.000138255; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilonewton" && op2 == "Kilogram-force") {
        box1_value = box2_value *0.00980665; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Newton") {
        box1_value = box2_value * 100000;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Kilonewton") {
        box1_value = box2_value*10000000;
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Dyne") {
        document.getElementById('force_box-1').value = box2_value;
    }
    else if (op1 == "Dyne" && op2 == "Pound-force") {
        box1_value = box2_value * 444822.161; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Poundal") {
        box1_value = box2_value * 13825.5; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Dyne" && op2 == "Kilogram-force") {
        box1_value = box2_value *980665; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Newton") {
        box1_value = box2_value / 4.44822; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Kilonewton") {
        box1_value = box2_value / 4448.22; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Dyne") {
        box1_value = box2_value / 0.00000224809; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Pound-force") {
        document.getElementById('force_box-1').value = box2_value;
    }
    else if (op1 == "Pound-force" && op2 == "Poundal") {
        box1_value = box2_value * 0.031080997078386276; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Pound-force" && op2 == "Kilogram-force") {
        box1_value = box2_value * 2.20462; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Newton") {
        box1_value = box2_value / 0.138255; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Kilonewton") {
        box1_value = box2_value / 138.255; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Dyne") {
        box1_value = box2_value / 0.0000723301; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Pound-force") {
        box1_value = box2_value / 32.174; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Poundal" && op2 == "Poundal") {
        document.getElementById('force_box-1').value = box2_value;
    }
    else if (op1 == "Poundal" && op2 == "Kilogram-force") {
        box1_value = box2_value / .709318; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Newton") {
        box1_value = box2_value / 9.80665; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Kilonewton") {
        box1_value = box2_value / .101972; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Dyne") {
        box1_value = box2_value / 1.01972e+6; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Pound-force") {
        box1_value = box2_value / 2.20462; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Poundal") {
        box1_value = box2_value / 70.9318; 
        document.getElementById('force_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram-force" && op2 == "Kilogram-force") {
        document.getElementById('force_box-1').value = box2_value;
    }
    force_his_show2();
    
    
    
}

function force_his_show() {
    let box1_value = document.getElementById('force_box-1').value;
    let box2_value = document.getElementById('force_box-2').value;
    let op1 = document.getElementById('force_select-1').value;
    let op2 = document.getElementById('force_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function force_his_show2() {
    let box1_value = document.getElementById('force_box-1').value;
    let box2_value = document.getElementById('force_box-2').value;
    let op1 = document.getElementById('force_select-1').value;
    let op2 = document.getElementById('force_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function density_box1() {
    let box1_value = document.getElementById('density_box-1').value;
    let box2_value = document.getElementById('density_box-2').value;
    let op1 = document.getElementById('density_select-1').value;
    let op2 = document.getElementById('density_select-2').value;

    if (op1 == "Kilogram per cubic meter" && op2 == "Kilogram per cubic meter") {
        document.getElementById('density_box-2').value = box1_value;
    }
    else if (op1 == "Kilogram per cubic meter" && op2 == "Gram per cubic centimeter") {
        box2_value = box1_value / 1000;
        document.getElementById('density_box-2').value = box2_value;
    }
    else if (op1 == "Kilogram per cubic meter" && op2 == "Pound per cubic foot") {
        box2_value = box1_value / 16.0184634; 
        document.getElementById('density_box-2').value = box2_value;
    }
    else if (op1 == "Gram per cubic centimeter" && op2 == "Gram per cubic centimeter") {
        document.getElementById('density_box-2').value = box1_value;
    }
    else if (op1 == "Gram per cubic centimeter" && op2 == "Kilogram per cubic meter") {
        box2_value = box1_value * 1000;
        document.getElementById('density_box-2').value = box2_value;
    }
    else if (op1 == "Gram per cubic centimeter" && op2 == "Pound per cubic foot") {
        box2_value = box1_value * 62.428;
        document.getElementById('density_box-2').value = box2_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Pound per cubic foot") {
        document.getElementById('density_box-2').value = box1_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Gram per cubic centimeter") {
        box2_value = box1_value / 62.428;
        document.getElementById('density_box-2').value = box2_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Kilogram per cubic meter") {
        box2_value = box1_value / 0.062428; 
        document.getElementById('density_box-2').value = box2_value;
    }
    density_his_show();
}

function density_box2() {
    let box1_value = document.getElementById('density_box-1').value;
    let box2_value = document.getElementById('density_box-2').value;
    let op1 = document.getElementById('density_select-1').value;
    let op2 = document.getElementById('density_select-2').value;

    if (op1 == "Kilogram per cubic meter" && op2 == "Kilogram per cubic meter") {
        document.getElementById('density_box-1').value = box2_value;
    }
    else if (op1 == "Kilogram per cubic meter" && op2 == "Gram per cubic centimeter") {
        box1_value = box2_value * 1000;
        document.getElementById('density_box-1').value = box1_value;
    }
    else if (op1 == "Kilogram per cubic meter" && op2 == "Pound per cubic foot") {
        box1_value = box2_value * 16.018453258153393; 
        document.getElementById('density_box-1').value = box1_value;
    }
    else  if (op1 == "Gram per cubic centimeter" && op2 == "Gram per cubic centimeter") {
        document.getElementById('density_box-1').value = box2_value;
    }
    else if (op1 == "Gram per cubic centimeter" && op2 == "Kilogram per cubic meter") {
        box1_value = box2_value / 1000;
        document.getElementById('density_box-1').value = box1_value;
    }
    else if (op1 == "Gram per cubic centimeter" && op2 == "Pound per cubic foot") {
        box1_value = box2_value * 0.016018453258153393; 
        document.getElementById('density_box-1').value = box1_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Pound per cubic foot") {
        document.getElementById('density_box-1').value = box2_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Gram per cubic centimeter") {
        box1_value = box2_value *62.428; 
        document.getElementById('density_box-1').value = box1_value;
    }
    else if (op1 == "Pound per cubic foot" && op2 == "Kilogram per cubic meter") {
        box1_value = box2_value *0.06242796047466075; 
        document.getElementById('density_box-1').value = box1_value;
    }
    density_his_show2();
}

function density_his_show() {
    let box1_value = document.getElementById('density_box-1').value;
    let box2_value = document.getElementById('density_box-2').value;
    let op1 = document.getElementById('density_select-1').value;
    let op2 = document.getElementById('density_select-2').value;
    document.getElementById('hs_box_1').value = box1_value;
    document.getElementById('hs_box_2').value = box2_value;
    document.getElementById('unit1').innerHTML = op1;
    document.getElementById('unit2').innerHTML = op2;
    let node = document.getElementById('hi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}
function density_his_show2() {
    let box1_value = document.getElementById('density_box-1').value;
    let box2_value = document.getElementById('density_box-2').value;
    let op1 = document.getElementById('density_select-1').value;
    let op2 = document.getElementById('density_select-2').value;
    document.getElementById('rhs_box_1').value = box1_value;
    document.getElementById('rhs_box_2').value = box2_value;
    document.getElementById('runit1').innerHTML = op1;
    document.getElementById('runit2').innerHTML = op2;
    let node = document.getElementById('rhi');
    let clone = node.cloneNode(true);
    document.getElementById('hist').appendChild(clone);
}