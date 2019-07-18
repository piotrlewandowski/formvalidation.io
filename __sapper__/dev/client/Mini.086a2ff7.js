import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import './chunk.17752e4f.js';
import { a as MiniLayout, b as Mini } from './chunk.143e3fe1.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="row">
            <div class="col-sm-3">
                <label>Full name</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="firstName" style="width: 100%" />
            </div>
            <div class="col-sm-4">
                <input type="text" name="lastName" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Username</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="username" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Email</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="email" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Password</label>
            </div>
            <div class="col-sm-4">
                <input type="password" name="password" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Gender</label>
            </div>
            <div class="col-sm-9">
                <div><input type="radio" name="gender" value="male" /> Male</div>
                <div><input type="radio" name="gender" value="female" /> Female</div>
                <div><input type="radio" name="gender" value="other" /> Other</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label id="captchaOperation"></label>
            </div>
            <div class="col-sm-3">
                <input type="text" name="captcha" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-9">
                <input type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mini.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Generate a simple captcha
    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: function() {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(input) {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            mini: new FormValidation.plugins.Mini({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.col-sm-4';
                        default:
                            return '.row';
                    }
                }
            }),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;

/* src/routes/download/register/Mini.svelte generated by Svelte v3.4.2 */

const file = "src/routes/download/register/Mini.svelte";

// (1:0) <MiniLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var form, div3, div0, label0, t0, t1, div1, input0, t2, div2, input1, t3, div6, div4, label1, t4, t5, div5, input2, t6, div9, div7, label2, t7, t8, div8, input3, t9, div12, div10, label3, t10, t11, div11, input4, t12, div18, div13, label4, t13, t14, div17, div14, input5, t15, t16, div15, input6, t17, t18, div16, input7, t19, t20, div21, div19, label5, t21, div20, input8, t22, div24, div22, t23, div23, input9, t24, t25, div26, div25, button, t26;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div0 = element("div");
			label0 = element("label");
			t0 = text("Full name");
			t1 = space();
			div1 = element("div");
			input0 = element("input");
			t2 = space();
			div2 = element("div");
			input1 = element("input");
			t3 = space();
			div6 = element("div");
			div4 = element("div");
			label1 = element("label");
			t4 = text("Username");
			t5 = space();
			div5 = element("div");
			input2 = element("input");
			t6 = space();
			div9 = element("div");
			div7 = element("div");
			label2 = element("label");
			t7 = text("Email");
			t8 = space();
			div8 = element("div");
			input3 = element("input");
			t9 = space();
			div12 = element("div");
			div10 = element("div");
			label3 = element("label");
			t10 = text("Password");
			t11 = space();
			div11 = element("div");
			input4 = element("input");
			t12 = space();
			div18 = element("div");
			div13 = element("div");
			label4 = element("label");
			t13 = text("Gender");
			t14 = space();
			div17 = element("div");
			div14 = element("div");
			input5 = element("input");
			t15 = text(" Male");
			t16 = space();
			div15 = element("div");
			input6 = element("input");
			t17 = text(" Female");
			t18 = space();
			div16 = element("div");
			input7 = element("input");
			t19 = text(" Other");
			t20 = space();
			div21 = element("div");
			div19 = element("div");
			label5 = element("label");
			t21 = space();
			div20 = element("div");
			input8 = element("input");
			t22 = space();
			div24 = element("div");
			div22 = element("div");
			t23 = space();
			div23 = element("div");
			input9 = element("input");
			t24 = text(" Agree with the terms and conditions");
			t25 = space();
			div26 = element("div");
			div25 = element("div");
			button = element("button");
			t26 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div0 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			label0 = claim_element(div0_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			t0 = claim_text(label0_nodes, "Full name");
			label0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_text(div3_nodes, "\n            ");

			div1 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n\n        ");

			div6 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			label1 = claim_element(div4_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			t4 = claim_text(label1_nodes, "Username");
			label1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t5 = claim_text(div6_nodes, "\n            ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t6 = claim_text(form_nodes, "\n\n        ");

			div9 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div9_nodes = children(div9);

			div7 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			label2 = claim_element(div7_nodes, "LABEL", {}, false);
			var label2_nodes = children(label2);

			t7 = claim_text(label2_nodes, "Email");
			label2_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t8 = claim_text(div9_nodes, "\n            ");

			div8 = claim_element(div9_nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			input3 = claim_element(div8_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input3_nodes = children(input3);

			input3_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t9 = claim_text(form_nodes, "\n\n        ");

			div12 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div12_nodes = children(div12);

			div10 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div10_nodes = children(div10);

			label3 = claim_element(div10_nodes, "LABEL", {}, false);
			var label3_nodes = children(label3);

			t10 = claim_text(label3_nodes, "Password");
			label3_nodes.forEach(detach);
			div10_nodes.forEach(detach);
			t11 = claim_text(div12_nodes, "\n            ");

			div11 = claim_element(div12_nodes, "DIV", { class: true }, false);
			var div11_nodes = children(div11);

			input4 = claim_element(div11_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input4_nodes = children(input4);

			input4_nodes.forEach(detach);
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			t12 = claim_text(form_nodes, "\n\n        ");

			div18 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div18_nodes = children(div18);

			div13 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div13_nodes = children(div13);

			label4 = claim_element(div13_nodes, "LABEL", {}, false);
			var label4_nodes = children(label4);

			t13 = claim_text(label4_nodes, "Gender");
			label4_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			t14 = claim_text(div18_nodes, "\n            ");

			div17 = claim_element(div18_nodes, "DIV", { class: true }, false);
			var div17_nodes = children(div17);

			div14 = claim_element(div17_nodes, "DIV", {}, false);
			var div14_nodes = children(div14);

			input5 = claim_element(div14_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input5_nodes = children(input5);

			input5_nodes.forEach(detach);
			t15 = claim_text(div14_nodes, " Male");
			div14_nodes.forEach(detach);
			t16 = claim_text(div17_nodes, "\n                ");

			div15 = claim_element(div17_nodes, "DIV", {}, false);
			var div15_nodes = children(div15);

			input6 = claim_element(div15_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input6_nodes = children(input6);

			input6_nodes.forEach(detach);
			t17 = claim_text(div15_nodes, " Female");
			div15_nodes.forEach(detach);
			t18 = claim_text(div17_nodes, "\n                ");

			div16 = claim_element(div17_nodes, "DIV", {}, false);
			var div16_nodes = children(div16);

			input7 = claim_element(div16_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input7_nodes = children(input7);

			input7_nodes.forEach(detach);
			t19 = claim_text(div16_nodes, " Other");
			div16_nodes.forEach(detach);
			div17_nodes.forEach(detach);
			div18_nodes.forEach(detach);
			t20 = claim_text(form_nodes, "\n\n        ");

			div21 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div21_nodes = children(div21);

			div19 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div19_nodes = children(div19);

			label5 = claim_element(div19_nodes, "LABEL", { id: true }, false);
			var label5_nodes = children(label5);

			label5_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			t21 = claim_text(div21_nodes, "\n            ");

			div20 = claim_element(div21_nodes, "DIV", { class: true }, false);
			var div20_nodes = children(div20);

			input8 = claim_element(div20_nodes, "INPUT", { type: true, name: true, style: true }, false);
			var input8_nodes = children(input8);

			input8_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t22 = claim_text(form_nodes, "\n\n        ");

			div24 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div24_nodes = children(div24);

			div22 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div22_nodes = children(div22);

			div22_nodes.forEach(detach);
			t23 = claim_text(div24_nodes, "\n            ");

			div23 = claim_element(div24_nodes, "DIV", { class: true }, false);
			var div23_nodes = children(div23);

			input9 = claim_element(div23_nodes, "INPUT", { type: true, name: true, value: true }, false);
			var input9_nodes = children(input9);

			input9_nodes.forEach(detach);
			t24 = claim_text(div23_nodes, " Agree with the terms and conditions");
			div23_nodes.forEach(detach);
			div24_nodes.forEach(detach);
			t25 = claim_text(form_nodes, "\n\n        ");

			div26 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div26_nodes = children(div26);

			div25 = claim_element(div26_nodes, "DIV", { class: true }, false);
			var div25_nodes = children(div25);

			button = claim_element(div25_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t26 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(label0, file, 4, 16, 200);
			div0.className = "col-sm-3";
			add_location(div0, file, 3, 12, 161);
			attr(input0, "type", "text");
			input0.name = "firstName";
			set_style(input0, "width", "100%");
			add_location(input0, file, 7, 16, 295);
			div1.className = "col-sm-4";
			add_location(div1, file, 6, 12, 256);
			attr(input1, "type", "text");
			input1.name = "lastName";
			set_style(input1, "width", "100%");
			add_location(input1, file, 10, 16, 424);
			div2.className = "col-sm-4";
			add_location(div2, file, 9, 12, 385);
			div3.className = "row";
			add_location(div3, file, 2, 8, 131);
			add_location(label1, file, 16, 16, 594);
			div4.className = "col-sm-3";
			add_location(div4, file, 15, 12, 555);
			attr(input2, "type", "text");
			input2.name = "username";
			set_style(input2, "width", "100%");
			add_location(input2, file, 19, 16, 688);
			div5.className = "col-sm-4";
			add_location(div5, file, 18, 12, 649);
			div6.className = "row";
			add_location(div6, file, 14, 8, 525);
			add_location(label2, file, 25, 16, 858);
			div7.className = "col-sm-3";
			add_location(div7, file, 24, 12, 819);
			attr(input3, "type", "text");
			input3.name = "email";
			set_style(input3, "width", "100%");
			add_location(input3, file, 28, 16, 949);
			div8.className = "col-sm-4";
			add_location(div8, file, 27, 12, 910);
			div9.className = "row";
			add_location(div9, file, 23, 8, 789);
			add_location(label3, file, 34, 16, 1116);
			div10.className = "col-sm-3";
			add_location(div10, file, 33, 12, 1077);
			attr(input4, "type", "password");
			input4.name = "password";
			set_style(input4, "width", "100%");
			add_location(input4, file, 37, 16, 1210);
			div11.className = "col-sm-4";
			add_location(div11, file, 36, 12, 1171);
			div12.className = "row";
			add_location(div12, file, 32, 8, 1047);
			add_location(label4, file, 43, 16, 1384);
			div13.className = "col-sm-3";
			add_location(div13, file, 42, 12, 1345);
			attr(input5, "type", "radio");
			input5.name = "gender";
			input5.value = "male";
			add_location(input5, file, 46, 21, 1481);
			add_location(div14, file, 46, 16, 1476);
			attr(input6, "type", "radio");
			input6.name = "gender";
			input6.value = "female";
			add_location(input6, file, 47, 21, 1563);
			add_location(div15, file, 47, 16, 1558);
			attr(input7, "type", "radio");
			input7.name = "gender";
			input7.value = "other";
			add_location(input7, file, 48, 21, 1649);
			add_location(div16, file, 48, 16, 1644);
			div17.className = "col-sm-9";
			add_location(div17, file, 45, 12, 1437);
			div18.className = "row";
			add_location(div18, file, 41, 8, 1315);
			label5.id = "captchaOperation";
			add_location(label5, file, 54, 16, 1824);
			div19.className = "col-sm-3";
			add_location(div19, file, 53, 12, 1785);
			attr(input8, "type", "text");
			input8.name = "captcha";
			set_style(input8, "width", "100%");
			add_location(input8, file, 57, 16, 1932);
			div20.className = "col-sm-3";
			add_location(div20, file, 56, 12, 1893);
			div21.className = "row";
			add_location(div21, file, 52, 8, 1755);
			div22.className = "col-sm-3";
			add_location(div22, file, 62, 12, 2062);
			attr(input9, "type", "checkbox");
			input9.name = "agree";
			input9.value = "agree";
			add_location(input9, file, 64, 16, 2142);
			div23.className = "col-sm-9";
			add_location(div23, file, 63, 12, 2103);
			div24.className = "row";
			add_location(div24, file, 61, 8, 2032);
			button.type = "submit";
			button.className = "primary";
			add_location(button, file, 70, 16, 2359);
			div25.className = "col-sm-9 col-sm-offset-3";
			add_location(div25, file, 69, 12, 2304);
			div26.className = "row";
			add_location(div26, file, 68, 8, 2274);
			form.id = "demoForm";
			form.method = "post";
			set_style(form, "background", "#FFF");
			set_style(form, "border", "none");
			set_style(form, "margin", "0");
			add_location(form, file, 1, 4, 37);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div0);
			append(div0, label0);
			append(label0, t0);
			append(div3, t1);
			append(div3, div1);
			append(div1, input0);
			append(div3, t2);
			append(div3, div2);
			append(div2, input1);
			append(form, t3);
			append(form, div6);
			append(div6, div4);
			append(div4, label1);
			append(label1, t4);
			append(div6, t5);
			append(div6, div5);
			append(div5, input2);
			append(form, t6);
			append(form, div9);
			append(div9, div7);
			append(div7, label2);
			append(label2, t7);
			append(div9, t8);
			append(div9, div8);
			append(div8, input3);
			append(form, t9);
			append(form, div12);
			append(div12, div10);
			append(div10, label3);
			append(label3, t10);
			append(div12, t11);
			append(div12, div11);
			append(div11, input4);
			append(form, t12);
			append(form, div18);
			append(div18, div13);
			append(div13, label4);
			append(label4, t13);
			append(div18, t14);
			append(div18, div17);
			append(div17, div14);
			append(div14, input5);
			append(div14, t15);
			append(div17, t16);
			append(div17, div15);
			append(div15, input6);
			append(div15, t17);
			append(div17, t18);
			append(div17, div16);
			append(div16, input7);
			append(div16, t19);
			append(form, t20);
			append(form, div21);
			append(div21, div19);
			append(div19, label5);
			append(div21, t21);
			append(div21, div20);
			append(div20, input8);
			append(form, t22);
			append(form, div24);
			append(div24, div22);
			append(div24, t23);
			append(div24, div23);
			append(div23, input9);
			append(div23, t24);
			append(form, t25);
			append(form, div26);
			append(div26, div25);
			append(div25, button);
			append(button, t26);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

function create_fragment(ctx) {
	var current;

	var minilayout = new MiniLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			minilayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			minilayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(minilayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var minilayout_changes = {};
			if (changed.onLoaded) minilayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) minilayout_changes.$$scope = { changed, ctx };
			minilayout.$set(minilayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			minilayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			minilayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			minilayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    $$invalidate('fv', fv = formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: () => {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: (input) => {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            mini: new Mini({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.col-sm-4';
                        default:
                            return '.row';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/mini',
                sampleCode: sampleCode,
            }),
        }
    }));
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Mini_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Mini_1;
