import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
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
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/validators/between/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/between/index.svelte";

// (10:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Options");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Options");
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

// (73:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Basic Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Basic Example");
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

// (82:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("ES6 Module Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "ES6 Module Example");
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

// (117:12) <PrevButton target="/guide/validators/base64">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("base64 validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "base64 validator");
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

// (118:12) <NextButton target="/guide/validators/bic">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("bic validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "bic validator");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, h30, t5, t6, p0, sup0, t7, t8, a, t9, t10, t11, table, tr0, th0, t12, t13, th1, t14, t15, th2, t16, t17, th3, t18, t19, tr1, td0, code0, t20, t21, td1, code1, t22, t23, td2, t24, t25, td3, t26, code2, t27, t28, code3, t29, t30, code4, t31, t32, t33, tr2, td4, code5, t34, sup1, t35, t36, td5, code6, t37, t38, code7, t39, t40, td6, t41, t42, td7, t43, t44, tr3, td8, code8, t45, t46, td9, code9, t47, t48, td10, t49, t50, td11, t51, t52, tr4, td12, code10, t53, sup2, t54, t55, td13, code11, t56, t57, code12, t58, t59, td14, t60, t61, td15, t62, t63, p1, t64, code13, t65, t66, code14, t67, t68, code15, t69, t70, t71, h31, t72, t73, t74, section1, t75, p2, t76, t77, p3, t78, t79, t80, section2, t81, p4, t82, t83, t84, t85, section3, div, t86, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import between from 'formvalidation/dist/es6/validators/between';

const result = between().validate({
    value: ...,
    options: {
        inclusive: ...,
        min: ...,
        max: ...,
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message
}
*/
` },
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/validators/between/basic",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import between from 'formvalidation/dist/es6/validators/between';

const checkLatitude = between().validate({
    value: 45,
    options: {
        inclusive: true,
        min: -90,
        max: 90,
        message: 'The latitude must be between -90.0 and 90.0',
    },
});
// checkLatitude.valid === true

const checkLongitude = between().validate({
    value: 200,
    options: {
        inclusive: true,
        min: -180,
        max: 180,
        message: 'The latitude must be between -180.0 and 180.0',
    },
});
// checkLongitude.valid === false
` },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['greaterThan', 'lessThan'] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/base64",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/bic",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("between validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Check if the input value is between (strictly or not) two given numbers");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			h30 = element("h3");
			t5 = text("Using with form field");
			t6 = space();
			p0 = element("p");
			sup0 = element("sup");
			t7 = text("*");
			t8 = text(" presents a required option. The HTML attributes are used to set the validator options via the ");
			a = element("a");
			t9 = text("Declarative");
			t10 = text(" plugin");
			t11 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t12 = text("Name");
			t13 = space();
			th1 = element("th");
			t14 = text("HTML attribute");
			t15 = space();
			th2 = element("th");
			t16 = text("Type");
			t17 = space();
			th3 = element("th");
			t18 = text("Description");
			t19 = space();
			tr1 = element("tr");
			td0 = element("td");
			code0 = element("code");
			t20 = text("inclusive");
			t21 = space();
			td1 = element("td");
			code1 = element("code");
			t22 = text("data-fv-between___inclusive");
			t23 = space();
			td2 = element("td");
			t24 = text("Boolean");
			t25 = space();
			td3 = element("td");
			t26 = text("Can be ");
			code2 = element("code");
			t27 = text("true");
			t28 = text(" or ");
			code3 = element("code");
			t29 = text("false");
			t30 = text(". If ");
			code4 = element("code");
			t31 = text("true");
			t32 = text(", the input value must be in the range strictly");
			t33 = space();
			tr2 = element("tr");
			td4 = element("td");
			code5 = element("code");
			t34 = text("max");
			sup1 = element("sup");
			t35 = text("*");
			t36 = space();
			td5 = element("td");
			code6 = element("code");
			t37 = text("data-fv-between___max");
			t38 = text(" or ");
			code7 = element("code");
			t39 = text("max");
			t40 = space();
			td6 = element("td");
			t41 = text("Float");
			t42 = space();
			td7 = element("td");
			t43 = text("The upper value in the range");
			t44 = space();
			tr3 = element("tr");
			td8 = element("td");
			code8 = element("code");
			t45 = text("message");
			t46 = space();
			td9 = element("td");
			code9 = element("code");
			t47 = text("data-fv-between___message");
			t48 = space();
			td10 = element("td");
			t49 = text("String");
			t50 = space();
			td11 = element("td");
			t51 = text("The error message");
			t52 = space();
			tr4 = element("tr");
			td12 = element("td");
			code10 = element("code");
			t53 = text("min");
			sup2 = element("sup");
			t54 = text("*");
			t55 = space();
			td13 = element("td");
			code11 = element("code");
			t56 = text("data-fv-between___min");
			t57 = text(" or ");
			code12 = element("code");
			t58 = text("min");
			t59 = space();
			td14 = element("td");
			t60 = text("Float");
			t61 = space();
			td15 = element("td");
			t62 = text("The lower value in the range");
			t63 = space();
			p1 = element("p");
			t64 = text("If you use ");
			code13 = element("code");
			t65 = text("min");
			t66 = text(" and ");
			code14 = element("code");
			t67 = text("max");
			t68 = text(" attributes, please set ");
			code15 = element("code");
			t69 = text("type=\"range\"");
			t70 = text(".");
			t71 = space();
			h31 = element("h3");
			t72 = text("Using with ES6 module");
			t73 = space();
			samplecode0.$$.fragment.c();
			t74 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t75 = space();
			p2 = element("p");
			t76 = text("The following example validates latitude and longitude values.");
			t77 = space();
			p3 = element("p");
			t78 = text("A valid latitude must be between -90.0 and 90.0, and valid longitude may range from -180.0 to 180.0.");
			t79 = space();
			demo.$$.fragment.c();
			t80 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t81 = space();
			p4 = element("p");
			t82 = text("The following snippet shows how to use the between validator with ES6 module:");
			t83 = space();
			samplecode1.$$.fragment.c();
			t84 = space();
			relatedvalidators.$$.fragment.c();
			t85 = space();
			section3 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t86 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "between validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Check if the input value is between (strictly or not) two given numbers");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n\n        ");

			h30 = claim_element(section0_nodes, "H3", {}, false);
			var h30_nodes = children(h30);

			t5 = claim_text(h30_nodes, "Using with form field");
			h30_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			sup0 = claim_element(p0_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t7 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, " presents a required option. The HTML attributes are used to set the validator options via the ");

			a = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t9 = claim_text(a_nodes, "Declarative");
			a_nodes.forEach(detach);
			t10 = claim_text(p0_nodes, " plugin");
			p0_nodes.forEach(detach);
			t11 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t12 = claim_text(th0_nodes, "Name");
			th0_nodes.forEach(detach);
			t13 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t14 = claim_text(th1_nodes, "HTML attribute");
			th1_nodes.forEach(detach);
			t15 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t16 = claim_text(th2_nodes, "Type");
			th2_nodes.forEach(detach);
			t17 = claim_text(tr0_nodes, "\n                ");

			th3 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th3_nodes = children(th3);

			t18 = claim_text(th3_nodes, "Description");
			th3_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t19 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code0 = claim_element(td0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t20 = claim_text(code0_nodes, "inclusive");
			code0_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t21 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			code1 = claim_element(td1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t22 = claim_text(code1_nodes, "data-fv-between___inclusive");
			code1_nodes.forEach(detach);
			td1_nodes.forEach(detach);
			t23 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t24 = claim_text(td2_nodes, "Boolean");
			td2_nodes.forEach(detach);
			t25 = claim_text(tr1_nodes, "\n                ");

			td3 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			t26 = claim_text(td3_nodes, "Can be ");

			code2 = claim_element(td3_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t27 = claim_text(code2_nodes, "true");
			code2_nodes.forEach(detach);
			t28 = claim_text(td3_nodes, " or ");

			code3 = claim_element(td3_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t29 = claim_text(code3_nodes, "false");
			code3_nodes.forEach(detach);
			t30 = claim_text(td3_nodes, ". If ");

			code4 = claim_element(td3_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t31 = claim_text(code4_nodes, "true");
			code4_nodes.forEach(detach);
			t32 = claim_text(td3_nodes, ", the input value must be in the range strictly");
			td3_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			t33 = claim_text(table_nodes, "\n            ");

			tr2 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr2_nodes = children(tr2);

			td4 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td4_nodes = children(td4);

			code5 = claim_element(td4_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t34 = claim_text(code5_nodes, "max");
			code5_nodes.forEach(detach);

			sup1 = claim_element(td4_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t35 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			td4_nodes.forEach(detach);
			t36 = claim_text(tr2_nodes, "\n                ");

			td5 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td5_nodes = children(td5);

			code6 = claim_element(td5_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t37 = claim_text(code6_nodes, "data-fv-between___max");
			code6_nodes.forEach(detach);
			t38 = claim_text(td5_nodes, " or ");

			code7 = claim_element(td5_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t39 = claim_text(code7_nodes, "max");
			code7_nodes.forEach(detach);
			td5_nodes.forEach(detach);
			t40 = claim_text(tr2_nodes, "\n                ");

			td6 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td6_nodes = children(td6);

			t41 = claim_text(td6_nodes, "Float");
			td6_nodes.forEach(detach);
			t42 = claim_text(tr2_nodes, "\n                ");

			td7 = claim_element(tr2_nodes, "TD", { class: true }, false);
			var td7_nodes = children(td7);

			t43 = claim_text(td7_nodes, "The upper value in the range");
			td7_nodes.forEach(detach);
			tr2_nodes.forEach(detach);
			t44 = claim_text(table_nodes, "\n            ");

			tr3 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr3_nodes = children(tr3);

			td8 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td8_nodes = children(td8);

			code8 = claim_element(td8_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t45 = claim_text(code8_nodes, "message");
			code8_nodes.forEach(detach);
			td8_nodes.forEach(detach);
			t46 = claim_text(tr3_nodes, "\n                ");

			td9 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td9_nodes = children(td9);

			code9 = claim_element(td9_nodes, "CODE", {}, false);
			var code9_nodes = children(code9);

			t47 = claim_text(code9_nodes, "data-fv-between___message");
			code9_nodes.forEach(detach);
			td9_nodes.forEach(detach);
			t48 = claim_text(tr3_nodes, "\n                ");

			td10 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td10_nodes = children(td10);

			t49 = claim_text(td10_nodes, "String");
			td10_nodes.forEach(detach);
			t50 = claim_text(tr3_nodes, "\n                ");

			td11 = claim_element(tr3_nodes, "TD", { class: true }, false);
			var td11_nodes = children(td11);

			t51 = claim_text(td11_nodes, "The error message");
			td11_nodes.forEach(detach);
			tr3_nodes.forEach(detach);
			t52 = claim_text(table_nodes, "\n            ");

			tr4 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr4_nodes = children(tr4);

			td12 = claim_element(tr4_nodes, "TD", { class: true }, false);
			var td12_nodes = children(td12);

			code10 = claim_element(td12_nodes, "CODE", {}, false);
			var code10_nodes = children(code10);

			t53 = claim_text(code10_nodes, "min");
			code10_nodes.forEach(detach);

			sup2 = claim_element(td12_nodes, "SUP", {}, false);
			var sup2_nodes = children(sup2);

			t54 = claim_text(sup2_nodes, "*");
			sup2_nodes.forEach(detach);
			td12_nodes.forEach(detach);
			t55 = claim_text(tr4_nodes, "\n                ");

			td13 = claim_element(tr4_nodes, "TD", { class: true }, false);
			var td13_nodes = children(td13);

			code11 = claim_element(td13_nodes, "CODE", {}, false);
			var code11_nodes = children(code11);

			t56 = claim_text(code11_nodes, "data-fv-between___min");
			code11_nodes.forEach(detach);
			t57 = claim_text(td13_nodes, " or ");

			code12 = claim_element(td13_nodes, "CODE", {}, false);
			var code12_nodes = children(code12);

			t58 = claim_text(code12_nodes, "min");
			code12_nodes.forEach(detach);
			td13_nodes.forEach(detach);
			t59 = claim_text(tr4_nodes, "\n                ");

			td14 = claim_element(tr4_nodes, "TD", { class: true }, false);
			var td14_nodes = children(td14);

			t60 = claim_text(td14_nodes, "Float");
			td14_nodes.forEach(detach);
			t61 = claim_text(tr4_nodes, "\n                ");

			td15 = claim_element(tr4_nodes, "TD", { class: true }, false);
			var td15_nodes = children(td15);

			t62 = claim_text(td15_nodes, "The lower value in the range");
			td15_nodes.forEach(detach);
			tr4_nodes.forEach(detach);
			table_nodes.forEach(detach);
			t63 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t64 = claim_text(p1_nodes, "If you use ");

			code13 = claim_element(p1_nodes, "CODE", {}, false);
			var code13_nodes = children(code13);

			t65 = claim_text(code13_nodes, "min");
			code13_nodes.forEach(detach);
			t66 = claim_text(p1_nodes, " and ");

			code14 = claim_element(p1_nodes, "CODE", {}, false);
			var code14_nodes = children(code14);

			t67 = claim_text(code14_nodes, "max");
			code14_nodes.forEach(detach);
			t68 = claim_text(p1_nodes, " attributes, please set ");

			code15 = claim_element(p1_nodes, "CODE", {}, false);
			var code15_nodes = children(code15);

			t69 = claim_text(code15_nodes, "type=\"range\"");
			code15_nodes.forEach(detach);
			t70 = claim_text(p1_nodes, ".");
			p1_nodes.forEach(detach);
			t71 = claim_text(section0_nodes, "\n\n        ");

			h31 = claim_element(section0_nodes, "H3", {}, false);
			var h31_nodes = children(h31);

			t72 = claim_text(h31_nodes, "Using with ES6 module");
			h31_nodes.forEach(detach);
			t73 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t74 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t75 = claim_text(section1_nodes, "\n\n        ");

			p2 = claim_element(section1_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t76 = claim_text(p2_nodes, "The following example validates latitude and longitude values.");
			p2_nodes.forEach(detach);
			t77 = claim_text(section1_nodes, "\n        ");

			p3 = claim_element(section1_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t78 = claim_text(p3_nodes, "A valid latitude must be between -90.0 and 90.0, and valid longitude may range from -180.0 to 180.0.");
			p3_nodes.forEach(detach);
			t79 = claim_text(section1_nodes, "\n\n        ");
			demo.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t80 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t81 = claim_text(section2_nodes, "\n\n        ");

			p4 = claim_element(section2_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t82 = claim_text(p4_nodes, "The following snippet shows how to use the between validator with ES6 module:");
			p4_nodes.forEach(detach);
			t83 = claim_text(section2_nodes, "\n");
			samplecode1.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t84 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t85 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			div = claim_element(section3_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t86 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 99);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 154);
			add_location(h30, file, 11, 8, 324);
			add_location(sup0, file, 12, 29, 384);
			a.href = "/guide/plugins/declarative";
			a.className = "blue dim link";
			add_location(a, file, 12, 136, 491);
			p0.className = "lh-copy i";
			add_location(p0, file, 12, 8, 363);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 15, 16, 704);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 16, 16, 764);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 17, 16, 834);
			th3.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th3, file, 18, 16, 894);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 14, 12, 655);
			add_location(code0, file, 21, 36, 1044);
			td0.className = "pv2 ph3";
			add_location(td0, file, 21, 16, 1024);
			add_location(code1, file, 22, 36, 1108);
			td1.className = "pv2 ph3";
			add_location(td1, file, 22, 16, 1088);
			td2.className = "pv2 ph3";
			add_location(td2, file, 23, 16, 1170);
			add_location(code2, file, 24, 51, 1254);
			add_location(code3, file, 24, 72, 1275);
			add_location(code4, file, 24, 95, 1298);
			td3.className = "pv2 ph3 lh-copy";
			add_location(td3, file, 24, 16, 1219);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 20, 12, 975);
			add_location(code5, file, 27, 36, 1467);
			add_location(sup1, file, 27, 52, 1483);
			td4.className = "pv2 ph3";
			add_location(td4, file, 27, 16, 1447);
			add_location(code6, file, 28, 36, 1537);
			add_location(code7, file, 28, 74, 1575);
			td5.className = "pv2 ph3";
			add_location(td5, file, 28, 16, 1517);
			td6.className = "pv2 ph3";
			add_location(td6, file, 29, 16, 1613);
			td7.className = "pv2 ph3";
			add_location(td7, file, 30, 16, 1660);
			tr2.className = "striped--light-gray";
			add_location(tr2, file, 26, 12, 1398);
			add_location(code8, file, 33, 36, 1813);
			td8.className = "pv2 ph3";
			add_location(td8, file, 33, 16, 1793);
			add_location(code9, file, 34, 36, 1875);
			td9.className = "pv2 ph3";
			add_location(td9, file, 34, 16, 1855);
			td10.className = "pv2 ph3";
			add_location(td10, file, 35, 16, 1935);
			td11.className = "pv2 ph3";
			add_location(td11, file, 36, 16, 1983);
			tr3.className = "striped--light-gray";
			add_location(tr3, file, 32, 12, 1744);
			add_location(code10, file, 39, 36, 2125);
			add_location(sup2, file, 39, 52, 2141);
			td12.className = "pv2 ph3";
			add_location(td12, file, 39, 16, 2105);
			add_location(code11, file, 40, 36, 2195);
			add_location(code12, file, 40, 74, 2233);
			td13.className = "pv2 ph3";
			add_location(td13, file, 40, 16, 2175);
			td14.className = "pv2 ph3";
			add_location(td14, file, 41, 16, 2271);
			td15.className = "pv2 ph3";
			add_location(td15, file, 42, 16, 2318);
			tr4.className = "striped--light-gray";
			add_location(tr4, file, 38, 12, 2056);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100";
			add_location(table, file, 13, 8, 585);
			add_location(code13, file, 45, 38, 2445);
			add_location(code14, file, 45, 59, 2466);
			add_location(code15, file, 45, 99, 2506);
			p1.className = "lh-copy";
			add_location(p1, file, 45, 8, 2415);
			add_location(h31, file, 47, 8, 2546);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 258);
			p2.className = "lh-copy";
			add_location(p2, file, 74, 8, 3077);
			p3.className = "lh-copy";
			add_location(p3, file, 75, 8, 3171);
			section1.className = "mv5";
			add_location(section1, file, 71, 4, 3005);
			p4.className = "lh-copy";
			add_location(p4, file, 83, 8, 3490);
			section2.className = "mv5";
			add_location(section2, file, 80, 4, 3413);
			div.className = "flex";
			add_location(div, file, 115, 8, 4356);
			section3.className = "mv5";
			add_location(section3, file, 114, 4, 4326);
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
			append(section0, h30);
			append(h30, t5);
			append(section0, t6);
			append(section0, p0);
			append(p0, sup0);
			append(sup0, t7);
			append(p0, t8);
			append(p0, a);
			append(a, t9);
			append(p0, t10);
			append(section0, t11);
			append(section0, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t12);
			append(tr0, t13);
			append(tr0, th1);
			append(th1, t14);
			append(tr0, t15);
			append(tr0, th2);
			append(th2, t16);
			append(tr0, t17);
			append(tr0, th3);
			append(th3, t18);
			append(table, t19);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code0);
			append(code0, t20);
			append(tr1, t21);
			append(tr1, td1);
			append(td1, code1);
			append(code1, t22);
			append(tr1, t23);
			append(tr1, td2);
			append(td2, t24);
			append(tr1, t25);
			append(tr1, td3);
			append(td3, t26);
			append(td3, code2);
			append(code2, t27);
			append(td3, t28);
			append(td3, code3);
			append(code3, t29);
			append(td3, t30);
			append(td3, code4);
			append(code4, t31);
			append(td3, t32);
			append(table, t33);
			append(table, tr2);
			append(tr2, td4);
			append(td4, code5);
			append(code5, t34);
			append(td4, sup1);
			append(sup1, t35);
			append(tr2, t36);
			append(tr2, td5);
			append(td5, code6);
			append(code6, t37);
			append(td5, t38);
			append(td5, code7);
			append(code7, t39);
			append(tr2, t40);
			append(tr2, td6);
			append(td6, t41);
			append(tr2, t42);
			append(tr2, td7);
			append(td7, t43);
			append(table, t44);
			append(table, tr3);
			append(tr3, td8);
			append(td8, code8);
			append(code8, t45);
			append(tr3, t46);
			append(tr3, td9);
			append(td9, code9);
			append(code9, t47);
			append(tr3, t48);
			append(tr3, td10);
			append(td10, t49);
			append(tr3, t50);
			append(tr3, td11);
			append(td11, t51);
			append(table, t52);
			append(table, tr4);
			append(tr4, td12);
			append(td12, code10);
			append(code10, t53);
			append(td12, sup2);
			append(sup2, t54);
			append(tr4, t55);
			append(tr4, td13);
			append(td13, code11);
			append(code11, t56);
			append(td13, t57);
			append(td13, code12);
			append(code12, t58);
			append(tr4, t59);
			append(tr4, td14);
			append(td14, t60);
			append(tr4, t61);
			append(tr4, td15);
			append(td15, t62);
			append(section0, t63);
			append(section0, p1);
			append(p1, t64);
			append(p1, code13);
			append(code13, t65);
			append(p1, t66);
			append(p1, code14);
			append(code14, t67);
			append(p1, t68);
			append(p1, code15);
			append(code15, t69);
			append(p1, t70);
			append(section0, t71);
			append(section0, h31);
			append(h31, t72);
			append(section0, t73);
			mount_component(samplecode0, section0, null);
			insert(target, t74, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t75);
			append(section1, p2);
			append(p2, t76);
			append(section1, t77);
			append(section1, p3);
			append(p3, t78);
			append(section1, t79);
			mount_component(demo, section1, null);
			insert(target, t80, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t81);
			append(section2, p4);
			append(p4, t82);
			append(section2, t83);
			mount_component(samplecode1, section2, null);
			insert(target, t84, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t85, anchor);
			insert(target, section3, anchor);
			append(section3, div);
			mount_component(prevbutton, div, null);
			append(div, t86);
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

			heading1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
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

			if (detaching) {
				detach(t74);
				detach(section1);
			}

			heading1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t80);
				detach(section2);
			}

			heading2.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t84);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t85);
				detach(section3);
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
			document.title = "FormValidation • between validator";
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
