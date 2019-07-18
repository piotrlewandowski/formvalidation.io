import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append } from './chunk.989912da.js';
import { a as Plugin, b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as SubmitButton } from './chunk.a3297732.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

class Alias extends Plugin {
    constructor(opts) {
        super(opts);
        this.opts = opts || {};
        this.validatorNameFilter = this.getValidatorName.bind(this);
    }
    install() {
        this.core.registerFilter('validator-name', this.validatorNameFilter);
    }
    uninstall() {
        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    }
    getValidatorName(alias, field) {
        return this.opts[alias] || alias;
    }
}

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="password" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                password: {
                    validators: {
                        required: {
                            message: 'The password is required'
                        },
                        checkStrength: {
                            message: 'It must be more than 8 characters long',
                            callback: function(input) {
                                return input.value.length >= 8;
                            },
                        },
                        checkUppercase: {
                            message: 'It must contain at least one uppercase character',
                            callback: function(input) {
                                return input.value != input.value.toLowerCase();
                            },
                        },
                        checkLowercase: {
                            message: 'It must contain at least one lowercase character',
                            callback: function(input) {
                                return input.value != input.value.toUpperCase();
                            },
                        },
                        checkDigit: {
                            message: 'It must contain at least one digit',
                            callback: function(input) {
                                return input.value.search(/[0-9]/) >= 0;
                            },
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                alias: new FormValidation.plugins.Alias({
                    required: 'notEmpty',
                    checkStrength: 'callback',
                    checkUppercase: 'callback',
                    checkLowercase: 'callback',
                    checkDigit: 'callback',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/plugins/alias/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/alias/basic/Tachyons.svelte";

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input, t2, div7, div6, div4, t3, div5, button, t4;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Password");
			t1 = space();
			div1 = element("div");
			input = element("input");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div4 = element("div");
			t3 = space();
			div5 = element("div");
			button = element("button");
			t4 = text("Submit");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Password");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t2 = claim_text(form_nodes, "\n\n        ");

			div7 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div4 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div4_nodes.forEach(detach);
			t3 = claim_text(div6_nodes, "\n                ");

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			button = claim_element(div5_nodes, "BUTTON", { type: true, class: true }, false);
			var button_nodes = children(button);

			t4 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 4, 16, 136);
			attr(input, "type", "text");
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			input.name = "password";
			add_location(input, file, 6, 20, 234);
			div1.className = "fl w-50";
			add_location(div1, file, 5, 16, 192);
			div2.className = "fl w-100";
			add_location(div2, file, 3, 12, 97);
			div3.className = "cf mb2";
			add_location(div3, file, 2, 8, 64);
			div4.className = "fl w-25 pa2";
			add_location(div4, file, 13, 16, 462);
			button.type = "submit";
			button.className = "ba b--black-20 bg-blue white ph3 pv2 br2";
			add_location(button, file, 15, 20, 552);
			div5.className = "fl w-50";
			add_location(div5, file, 14, 16, 510);
			div6.className = "fl w-100";
			add_location(div6, file, 12, 12, 423);
			div7.className = "cf mb2";
			add_location(div7, file, 11, 8, 390);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 1, 4, 21);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, input);
			append(form, t2);
			append(form, div7);
			append(div7, div6);
			append(div6, div4);
			append(div6, t3);
			append(div6, div5);
			append(div5, button);
			append(button, t4);
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

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self) {
	

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            password: {
                validators: {
                    required: {
                        message: 'The password is required'
                    },
                    checkStrength: {
                        message: 'It must be more than 8 characters long',
                        callback: (input) => {
                            return input.value.length >= 8;
                        },
                    },
                    checkUppercase: {
                        message: 'It must contain at least one uppercase character',
                        callback: (input) => {
                            return input.value != input.value.toLowerCase();
                        },
                    },
                    checkLowercase: {
                        message: 'It must contain at least one lowercase character',
                        callback: (input) => {
                            return input.value != input.value.toUpperCase();
                        },
                    },
                    checkDigit: {
                        message: 'It must contain at least one digit',
                        callback: (input) => {
                            return input.value.search(/[0-9]/) >= 0;
                        },
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            alias: new Alias({
                required: 'notEmpty',
                checkStrength: 'callback',
                checkUppercase: 'callback',
                checkLowercase: 'callback',
                checkDigit: 'callback',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/alias/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});

	return {};
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
