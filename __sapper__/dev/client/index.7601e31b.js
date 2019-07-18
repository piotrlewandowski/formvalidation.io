import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';

/* src/routes/guide/plugins/wizard/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/plugins/wizard/index.svelte";

// (10:8) <Heading>
function create_default_slot_7(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Usage");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Usage");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (101:8) <Heading>
function create_default_slot_6(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Events");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Events");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (167:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Submitting form");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Submitting form");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (187:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Basic example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Basic example");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (192:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Changelog");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Changelog");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (201:12) <PrevButton target="/guide/plugins/uikit">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Uikit plugin");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Uikit plugin");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (202:12) <NextButton target="/guide/api">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("API");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "API");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, t4, p0, t5, code0, t6, t7, t8, t9, p1, t10, span, t11, t12, t13, p2, t14, t15, t16, p3, t17, t18, table, tr0, th0, t19, t20, th1, t21, t22, th2, t23, t24, tr1, td0, code1, t25, t26, td1, t27, t28, td2, t29, t30, tr2, td3, code2, t31, t32, td4, t33, t34, td5, t35, t36, tr3, td6, code3, t37, t38, td7, t39, t40, td8, t41, t42, section1, t43, p4, t44, t45, t46, p5, t47, code4, t48, t49, t50, t51, section2, t52, p6, t53, a, t54, t55, code5, t56, t57, code6, t58, t59, t60, t61, section3, t62, t63, section4, t64, ul, li0, t65, t66, li1, t67, t68, section5, div, t69, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<form id="demoForm" method="POST">
    <!-- Split the form into multiple steps -->
    <div class="js-step">
        ...
    </div>

    <div class="js-step">
        ...
    </div>

    <div class="js-step">
        ...
    </div>

    <!-- The button to go to the previous step -->
    <button id="prevButton">Prev</button>

    <!-- The button to go to the next step -->
    <button id="nextButton">Next</button>
</form>
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "html", code: `
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Wizard.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                // The options here matches with the form above
                wizard: new FormValidation.plugins.Wizard({
                    stepSelector: '.js-step',
                    prevButton: '#prevButton',
                    nextButton: '#nextButton',
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        wizard: new FormValidation.plugins.Wizard({
            // Triggered when a step is activated
            onStepActive: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when a step is invalid
            onStepInvalid: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when a step is valid
            onStepValid: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when all steps are valid
            onValid: function(e) {
                // e.numSteps is the number of steps
            },
        }),
    },
});
` },
		$$inline: true
	});

	var samplecode3 = new SampleCode({
		props: { lang: "javascript", code: `
FormValidation
    .formValidation(form, {
        fields: {
            ...
        },
        plugins: {
            wizard: new FormValidation.plugins.Wizard({
                stepSelector: '...',
                prevButton: '...',
                nextButton: '...',
            }),
        },
    })
    .on('plugins.wizard.step.active', function(e) {
        // Same as onStepActive option
    })
    .on('plugins.wizard.step.invalid', function(e) {
        // Same as onStepInvalid option
    })
    .on('plugins.wizard.step.valid', function(e) {
        // Same as onStepValid option
    })
    .on('plugins.wizard.valid', function(e) {
        // Same as onValid option
    });
` },
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode4 = new SampleCode({
		props: { lang: "javascript", code: `
FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        wizard: new FormValidation.plugins.Wizard({
            onValid: function(e) {
                // Submit the form when all steps are valid
                form.submit();
            },
        }),
    },
});
` },
		$$inline: true
	});

	var heading3 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/plugins/wizard/basic",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var heading4 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/plugins/uikit",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/api",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Wizard plugin");
			t1 = space();
			h2 = element("h2");
			t2 = text("Support validating multiple steps form");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			p0 = element("p");
			t5 = text("Assume that the form is split into multiple steps which can be accessed via a CSS class ");
			code0 = element("code");
			t6 = text("js-step");
			t7 = text(". It also contains two buttons for jumping to the previous or next step.");
			t8 = space();
			samplecode0.$$.fragment.c();
			t9 = space();
			p1 = element("p");
			t10 = text("Clicking the ");
			span = element("span");
			t11 = text("Next");
			t12 = text(" button will validate the current step. If all fields in the step are valid, the plugin will bring user to the next step.");
			t13 = space();
			p2 = element("p");
			t14 = text("The following piece of code is the starting point to use the Wizard plugin:");
			t15 = space();
			samplecode1.$$.fragment.c();
			t16 = space();
			p3 = element("p");
			t17 = text("The Wizard plugin provides three required options:");
			t18 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t19 = text("Option");
			t20 = space();
			th1 = element("th");
			t21 = text("Type");
			t22 = space();
			th2 = element("th");
			t23 = text("Description");
			t24 = space();
			tr1 = element("tr");
			td0 = element("td");
			code1 = element("code");
			t25 = text("stepSelector");
			t26 = space();
			td1 = element("td");
			t27 = text("String");
			t28 = space();
			td2 = element("td");
			t29 = text("A CSS selector of steps");
			t30 = space();
			tr2 = element("tr");
			td3 = element("td");
			code2 = element("code");
			t31 = text("prevButton");
			t32 = space();
			td4 = element("td");
			t33 = text("String");
			t34 = space();
			td5 = element("td");
			t35 = text("A CSS selector of the Previous button");
			t36 = space();
			tr3 = element("tr");
			td6 = element("td");
			code3 = element("code");
			t37 = text("nextButton");
			t38 = space();
			td7 = element("td");
			t39 = text("String");
			t40 = space();
			td8 = element("td");
			t41 = text("A CSS selector of the Next button");
			t42 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t43 = space();
			p4 = element("p");
			t44 = text("The Wizard plugin provides four events that you can trigger. The event handlers can be set via either plugin option");
			t45 = space();
			samplecode2.$$.fragment.c();
			t46 = space();
			p5 = element("p");
			t47 = text("or using ");
			code4 = element("code");
			t48 = text("on()");
			t49 = text(" as following:");
			t50 = space();
			samplecode3.$$.fragment.c();
			t51 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t52 = space();
			p6 = element("p");
			t53 = text("You cannot use the ");
			a = element("a");
			t54 = text("DefaultSubmit");
			t55 = text(" plugin to submit the form when all steps are valid. Instead, you can use the ");
			code5 = element("code");
			t56 = text("onValid");
			t57 = text(" option (or listen the ");
			code6 = element("code");
			t58 = text("plugins.wizard.valid");
			t59 = text(" event):");
			t60 = space();
			samplecode4.$$.fragment.c();
			t61 = space();
			section3 = element("section");
			heading3.$$.fragment.c();
			t62 = space();
			demo.$$.fragment.c();
			t63 = space();
			section4 = element("section");
			heading4.$$.fragment.c();
			t64 = space();
			ul = element("ul");
			li0 = element("li");
			t65 = text("v1.5.0: Fixed a bug that the Wizard plugin doesn't work on IE 11.");
			t66 = space();
			li1 = element("li");
			t67 = text("v1.3.0: First release. It means that the Wizard plugin requires FormValidation v1.3.0 or newer.");
			t68 = space();
			section5 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t69 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Wizard plugin");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Support validating multiple steps form");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t5 = claim_text(p0_nodes, "Assume that the form is split into multiple steps which can be accessed via a CSS class ");

			code0 = claim_element(p0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t6 = claim_text(code0_nodes, "js-step");
			code0_nodes.forEach(detach);
			t7 = claim_text(p0_nodes, ". It also contains two buttons for jumping to the previous or next step.");
			p0_nodes.forEach(detach);
			t8 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			t9 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t10 = claim_text(p1_nodes, "Clicking the ");

			span = claim_element(p1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t11 = claim_text(span_nodes, "Next");
			span_nodes.forEach(detach);
			t12 = claim_text(p1_nodes, " button will validate the current step. If all fields in the step are valid, the plugin will bring user to the next step.");
			p1_nodes.forEach(detach);
			t13 = claim_text(section0_nodes, "\n        ");

			p2 = claim_element(section0_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t14 = claim_text(p2_nodes, "The following piece of code is the starting point to use the Wizard plugin:");
			p2_nodes.forEach(detach);
			t15 = claim_text(section0_nodes, "\n");
			samplecode1.$$.fragment.l(section0_nodes);
			t16 = claim_text(section0_nodes, "\n        ");

			p3 = claim_element(section0_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t17 = claim_text(p3_nodes, "The Wizard plugin provides three required options:");
			p3_nodes.forEach(detach);
			t18 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t19 = claim_text(th0_nodes, "Option");
			th0_nodes.forEach(detach);
			t20 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t21 = claim_text(th1_nodes, "Type");
			th1_nodes.forEach(detach);
			t22 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t23 = claim_text(th2_nodes, "Description");
			th2_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t24 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code1 = claim_element(td0_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t25 = claim_text(code1_nodes, "stepSelector");
			code1_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t26 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			t27 = claim_text(td1_nodes, "String");
			td1_nodes.forEach(detach);
			t28 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t29 = claim_text(td2_nodes, "A CSS selector of steps");
			td2_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t30 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td3 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			code2 = claim_element(td3_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t31 = claim_text(code2_nodes, "prevButton");
			code2_nodes.forEach(detach);
			td3_nodes.forEach(detach);
			t32 = claim_text(tr2_nodes, "\n                ");

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			t33 = claim_text(td4_nodes, "String");
			td4_nodes.forEach(detach);
			t34 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			t35 = claim_text(td5_nodes, "A CSS selector of the Previous button");
			td5_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t36 = claim_text(table_nodes, "\n            ");

			tr3 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr3_nodes = children(tr3);

			td6 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			code3 = claim_element(td6_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t37 = claim_text(code3_nodes, "nextButton");
			code3_nodes.forEach(detach);
			td6_nodes.forEach(detach);
			t38 = claim_text(tr3_nodes, "\n                ");

			td7 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t39 = claim_text(td7_nodes, "String");
			td7_nodes.forEach(detach);
			t40 = claim_text(tr3_nodes, "\n                ");

			td8 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td8_nodes = children(td8);

			t41 = claim_text(td8_nodes, "A CSS selector of the Next button");
			td8_nodes.forEach(detach);
			tr3_nodes.forEach(detach);
			table_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t42 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t43 = claim_text(section1_nodes, "\n        ");

			p4 = claim_element(section1_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t44 = claim_text(p4_nodes, "The Wizard plugin provides four events that you can trigger. The event handlers can be set via either plugin option");
			p4_nodes.forEach(detach);
			t45 = claim_text(section1_nodes, "\n");
			samplecode2.$$.fragment.l(section1_nodes);
			t46 = claim_text(section1_nodes, "\n        ");

			p5 = claim_element(section1_nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t47 = claim_text(p5_nodes, "or using ");

			code4 = claim_element(p5_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t48 = claim_text(code4_nodes, "on()");
			code4_nodes.forEach(detach);
			t49 = claim_text(p5_nodes, " as following:");
			p5_nodes.forEach(detach);
			t50 = claim_text(section1_nodes, "\n");
			samplecode3.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t51 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t52 = claim_text(section2_nodes, "\n        ");

			p6 = claim_element(section2_nodes, "P", { class: true }, false);
			var p6_nodes = children(p6);

			t53 = claim_text(p6_nodes, "You cannot use the ");

			a = claim_element(p6_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t54 = claim_text(a_nodes, "DefaultSubmit");
			a_nodes.forEach(detach);
			t55 = claim_text(p6_nodes, " plugin to submit the form when all steps are valid. Instead, you can use the ");

			code5 = claim_element(p6_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t56 = claim_text(code5_nodes, "onValid");
			code5_nodes.forEach(detach);
			t57 = claim_text(p6_nodes, " option (or listen the ");

			code6 = claim_element(p6_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t58 = claim_text(code6_nodes, "plugins.wizard.valid");
			code6_nodes.forEach(detach);
			t59 = claim_text(p6_nodes, " event):");
			p6_nodes.forEach(detach);
			t60 = claim_text(section2_nodes, "\n");
			samplecode4.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t61 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			heading3.$$.fragment.l(section3_nodes);
			t62 = claim_text(section3_nodes, "\n        ");
			demo.$$.fragment.l(section3_nodes);
			section3_nodes.forEach(detach);
			t63 = claim_text(nodes, "\n\n    ");

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			heading4.$$.fragment.l(section4_nodes);
			t64 = claim_text(section4_nodes, "\n        ");

			ul = claim_element(section4_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t65 = claim_text(li0_nodes, "v1.5.0: Fixed a bug that the Wizard plugin doesn't work on IE 11.");
			li0_nodes.forEach(detach);
			t66 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t67 = claim_text(li1_nodes, "v1.3.0: First release. It means that the Wizard plugin requires FormValidation v1.3.0 or newer.");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section4_nodes.forEach(detach);
			t68 = claim_text(nodes, "\n\n    ");

			section5 = claim_element(nodes, "SECTION", { class: true }, false);
			var section5_nodes = children(section5);

			div = claim_element(section5_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t69 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section5_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 95);
			h2.className = "f4 fw4 tc lh-copy";
			add_location(h2, file, 6, 4, 146);
			add_location(code0, file, 10, 115, 395);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 288);
			span.className = "i";
			add_location(span, file, 33, 40, 994);
			p1.className = "lh-copy";
			add_location(p1, file, 33, 8, 962);
			p2.className = "lh-copy";
			add_location(p2, file, 34, 8, 1155);
			p3.className = "lh-copy";
			add_location(p3, file, 74, 8, 2489);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 77, 16, 2694);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 78, 16, 2756);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 79, 16, 2816);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 76, 12, 2645);
			add_location(code1, file, 82, 36, 2966);
			td0.className = "pv2 ph3";
			add_location(td0, file, 82, 16, 2946);
			td1.className = "pv2 ph3";
			add_location(td1, file, 83, 16, 3013);
			td2.className = "pv2 ph3 lh-copy";
			add_location(td2, file, 84, 16, 3061);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 81, 12, 2897);
			add_location(code2, file, 87, 36, 3217);
			td3.className = "pv2 ph3";
			add_location(td3, file, 87, 16, 3197);
			td4.className = "pv2 ph3";
			add_location(td4, file, 88, 16, 3262);
			td5.className = "pv2 ph3 lh-copy";
			add_location(td5, file, 89, 16, 3310);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 86, 12, 3148);
			add_location(code3, file, 92, 36, 3480);
			td6.className = "pv2 ph3";
			add_location(td6, file, 92, 16, 3460);
			td7.className = "pv2 ph3";
			add_location(td7, file, 93, 16, 3525);
			td8.className = "pv2 ph3 lh-copy";
			add_location(td8, file, 94, 16, 3573);
			tr3.className = "striped--light-gray";
			add_location(tr3, file, 91, 12, 3411);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100 mb4";
			add_location(table, file, 75, 8, 2571);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 225);
			p4.className = "lh-copy";
			add_location(p4, file, 101, 8, 3759);
			add_location(code4, file, 135, 36, 4961);
			p5.className = "lh-copy";
			add_location(p5, file, 135, 8, 4933);
			section1.className = "mv5";
			add_location(section1, file, 99, 4, 3695);
			a.href = "/guide/plugins/default-submit";
			a.className = "blue dim link";
			add_location(a, file, 167, 46, 5866);
			add_location(code5, file, 167, 203, 6023);
			add_location(code6, file, 167, 246, 6066);
			p6.className = "lh-copy";
			add_location(p6, file, 167, 8, 5828);
			section2.className = "mv5";
			add_location(section2, file, 165, 4, 5755);
			section3.className = "mv5";
			add_location(section3, file, 185, 4, 6486);
			add_location(li0, file, 193, 12, 6761);
			add_location(li1, file, 194, 12, 6848);
			ul.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul, file, 192, 8, 6716);
			section4.className = "mv5";
			add_location(section4, file, 190, 4, 6649);
			div.className = "flex";
			add_location(div, file, 199, 8, 7017);
			section5.className = "mv5";
			add_location(section5, file, 198, 4, 6987);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t4);
			append(section0, p0);
			append(p0, t5);
			append(p0, code0);
			append(code0, t6);
			append(p0, t7);
			append(section0, t8);
			mount_component(samplecode0, section0, null);
			append(section0, t9);
			append(section0, p1);
			append(p1, t10);
			append(p1, span);
			append(span, t11);
			append(p1, t12);
			append(section0, t13);
			append(section0, p2);
			append(p2, t14);
			append(section0, t15);
			mount_component(samplecode1, section0, null);
			append(section0, t16);
			append(section0, p3);
			append(p3, t17);
			append(section0, t18);
			append(section0, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t19);
			append(tr0, t20);
			append(tr0, th1);
			append(th1, t21);
			append(tr0, t22);
			append(tr0, th2);
			append(th2, t23);
			append(table, t24);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code1);
			append(code1, t25);
			append(tr1, t26);
			append(tr1, td1);
			append(td1, t27);
			append(tr1, t28);
			append(tr1, td2);
			append(td2, t29);
			append(table, t30);
			append(table, tr2);
			append(tr2, td3);
			append(td3, code2);
			append(code2, t31);
			append(tr2, t32);
			append(tr2, td4);
			append(td4, t33);
			append(tr2, t34);
			append(tr2, td5);
			append(td5, t35);
			append(table, t36);
			append(table, tr3);
			append(tr3, td6);
			append(td6, code3);
			append(code3, t37);
			append(tr3, t38);
			append(tr3, td7);
			append(td7, t39);
			append(tr3, t40);
			append(tr3, td8);
			append(td8, t41);
			insert(target, t42, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t43);
			append(section1, p4);
			append(p4, t44);
			append(section1, t45);
			mount_component(samplecode2, section1, null);
			append(section1, t46);
			append(section1, p5);
			append(p5, t47);
			append(p5, code4);
			append(code4, t48);
			append(p5, t49);
			append(section1, t50);
			mount_component(samplecode3, section1, null);
			insert(target, t51, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t52);
			append(section2, p6);
			append(p6, t53);
			append(p6, a);
			append(a, t54);
			append(p6, t55);
			append(p6, code5);
			append(code5, t56);
			append(p6, t57);
			append(p6, code6);
			append(code6, t58);
			append(p6, t59);
			append(section2, t60);
			mount_component(samplecode4, section2, null);
			insert(target, t61, anchor);
			insert(target, section3, anchor);
			mount_component(heading3, section3, null);
			append(section3, t62);
			mount_component(demo, section3, null);
			insert(target, t63, anchor);
			insert(target, section4, anchor);
			mount_component(heading4, section4, null);
			append(section4, t64);
			append(section4, ul);
			append(ul, li0);
			append(li0, t65);
			append(ul, t66);
			append(ul, li1);
			append(li1, t67);
			insert(target, t68, anchor);
			insert(target, section5, anchor);
			append(section5, div);
			mount_component(prevbutton, div, null);
			append(div, t69);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

			var heading3_changes = {};
			if (changed.$$scope) heading3_changes.$$scope = { changed, ctx };
			heading3.$set(heading3_changes);

			var heading4_changes = {};
			if (changed.$$scope) heading4_changes.$$scope = { changed, ctx };
			heading4.$set(heading4_changes);

			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			samplecode3.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			samplecode4.$$.fragment.i(local);

			heading3.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			heading4.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			samplecode3.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			samplecode4.$$.fragment.o(local);
			heading3.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			heading4.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t3);
				detach(section0);
			}

			heading0.$destroy();

			samplecode0.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t42);
				detach(section1);
			}

			heading1.$destroy();

			samplecode2.$destroy();

			samplecode3.$destroy();

			if (detaching) {
				detach(t51);
				detach(section2);
			}

			heading2.$destroy();

			samplecode4.$destroy();

			if (detaching) {
				detach(t61);
				detach(section3);
			}

			heading3.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t63);
				detach(section4);
			}

			heading4.$destroy();

			if (detaching) {
				detach(t68);
				detach(section5);
			}

			prevbutton.$destroy();

			nextbutton.$destroy();
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var guidelayout = new GuideLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			guidelayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • Wizard plugin";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var guidelayout_changes = {};
			if (changed.$$scope) guidelayout_changes.$$scope = { changed, ctx };
			guidelayout.$set(guidelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			guidelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			guidelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			guidelayout.$destroy(detaching);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
