import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, B as onMount, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append, D as add_binding_callback } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import { a as ReceiveMessage } from './chunk.75c83501.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';
import { a as ismn } from './chunk.2aa68650.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">ISMN</div>
                <div class="fl w-50">
                    <input type="text" name="ismn" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
<!-- 
You have to include the full version of FormValidation which contains all validators
including the ismn validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ismn: {
                    validators: {
                        ismn: {
                            message: 'The value is not valid ISMN'
                        }
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
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/ismn/basic/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/ismn/basic/Tachyons.svelte";

// (2:4) <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/ismn/basic" on:received={receive}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, input;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("ISMN");
			t1 = space();
			div1 = element("div");
			input = element("input");
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

			t0 = claim_text(div0_nodes, "ISMN");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			input = claim_element(div1_nodes, "INPUT", { type: true, name: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-25 pa2";
			add_location(div0, file, 5, 20, 262);
			attr(input, "type", "text");
			input.name = "ismn";
			input.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(input, file, 7, 24, 364);
			div1.className = "fl w-50";
			add_location(div1, file, 6, 20, 318);
			div2.className = "fl w-100";
			add_location(div2, file, 4, 16, 219);
			div3.className = "cf mb2";
			add_location(div3, file, 3, 12, 182);
			form.id = "demoForm";
			form.method = "post";
			add_location(form, file, 2, 8, 135);
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
			add_binding_callback(() => ctx.input_binding(input, null));
		},

		p: function update(changed, ctx) {
			if (changed.items) {
				ctx.input_binding(null, input);
				ctx.input_binding(input, null);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			ctx.input_binding(null, input);
		}
	};
}

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var current;

	var receivemessage = new ReceiveMessage({
		props: {
		channel: "SAMPLE_FIELD_VALUE",
		sender: "/guide/validators/ismn/basic",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});
	receivemessage.$on("received", ctx.receive);

	return {
		c: function create() {
			receivemessage.$$.fragment.c();
		},

		l: function claim(nodes) {
			receivemessage.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(receivemessage, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var receivemessage_changes = {};
			if (changed.$$scope || changed.inputEle) receivemessage_changes.$$scope = { changed, ctx };
			receivemessage.$set(receivemessage_changes);
		},

		i: function intro(local) {
			if (current) return;
			receivemessage.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			receivemessage.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			receivemessage.$destroy(detaching);
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
			if (changed.$$scope || changed.inputEle) tachyonslayout_changes.$$scope = { changed, ctx };
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

function instance($$self, $$props, $$invalidate) {
	

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v; $$invalidate('inputEle', inputEle);

    if (fv) {
        fv.revalidateField('ismn').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/ismn/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

onMount(() => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            ismn: {
                validators: {
                    ismn: {
                        message: 'The value is not valid ISMN'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/ismn/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('ismn', ismn));

    return () => {
        fv.destroy();
    };
});

	function input_binding($$node, check) {
		inputEle = $$node;
		$$invalidate('inputEle', inputEle);
	}

	return { inputEle, receive, input_binding };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
