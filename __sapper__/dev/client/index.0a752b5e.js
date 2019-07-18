import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as ChangelogLayout } from './chunk.4a563e90.js';

/* src/routes/updates/v0.5.3/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/updates/v0.5.3/index.svelte";

// (10:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("New features");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "New features");
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

// (27:8) <Heading>
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Improvements");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Improvements");
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

// (40:8) <Heading>
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Bug fixes");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Bug fixes");
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

// (5:0) <ChangelogLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, t4, ul0, li0, t5, code0, t6, t7, code1, t8, t9, a0, t10, t11, t12, li1, t13, a1, t14, t15, t16, li2, t17, a2, t18, t19, t20, li3, t21, code2, t22, t23, a3, t24, t25, t26, li4, t27, code3, t28, t29, code4, t30, t31, code5, t32, t33, code6, t34, t35, a4, t36, t37, t38, li5, t39, a5, t40, t41, t42, li6, t43, a6, t44, t45, t46, li7, t47, a7, t48, t49, a8, t50, t51, t52, li8, t53, a9, t54, t55, t56, li9, t57, code7, t58, t59, t60, li10, t61, a10, t62, t63, t64, section1, t65, ul1, li11, t66, a11, t67, t68, code8, t69, t70, t71, li12, t72, a12, t73, t74, a13, t75, t76, t77, li13, t78, t79, li14, t80, t81, li15, t82, a14, t83, t84, code9, t85, t86, t87, li16, t88, code10, t89, t90, li17, t91, t92, section2, t93, ul2, li18, t94, t95, li19, t96, t97, li20, t98, code11, t99, t100, code12, t101, t102, li21, t103, code13, t104, t105, code14, t106, t107, t108, li22, t109, t110, li23, t111, code15, t112, t113, code16, t114, t115, li24, t116, code17, t117, t118, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Version 0.5.3");
			t1 = space();
			h2 = element("h2");
			t2 = text("Released 05 November 2014");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			ul0 = element("ul");
			li0 = element("li");
			t5 = text("Add ");
			code0 = element("code");
			t6 = text("min");
			t7 = text(", ");
			code1 = element("code");
			t8 = text("max");
			t9 = text(" options for the ");
			a0 = element("a");
			t10 = text("date");
			t11 = text(" validator");
			t12 = space();
			li1 = element("li");
			t13 = text("Add ");
			a1 = element("a");
			t14 = text("color");
			t15 = text(" validator");
			t16 = space();
			li2 = element("li");
			t17 = text("The ");
			a2 = element("a");
			t18 = text("stringLength");
			t19 = text(" validator adds option to evaluate length in UTF-8 bytes");
			t20 = space();
			li3 = element("li");
			t21 = text("Add ");
			code2 = element("code");
			t22 = text("trim");
			t23 = text(" option for the ");
			a3 = element("a");
			t24 = text("stringLength");
			t25 = text(" validator");
			t26 = space();
			li4 = element("li");
			t27 = text("Add ");
			code3 = element("code");
			t28 = text("minFiles");
			t29 = text(", ");
			code4 = element("code");
			t30 = text("maxFiles");
			t31 = text(", ");
			code5 = element("code");
			t32 = text("minTotalSize");
			t33 = text(", ");
			code6 = element("code");
			t34 = text("maxTotalSize");
			t35 = text(" options for the ");
			a4 = element("a");
			t36 = text("file");
			t37 = text(" validator");
			t38 = space();
			li5 = element("li");
			t39 = text("Add France ");
			a5 = element("a");
			t40 = text("postal code");
			t41 = text(" validator");
			t42 = space();
			li6 = element("li");
			t43 = text("Add Ireland ");
			a6 = element("a");
			t44 = text("postal code");
			t45 = text(" validator");
			t46 = space();
			li7 = element("li");
			t47 = text("Add German ");
			a7 = element("a");
			t48 = text("phone number");
			t49 = text(" and ");
			a8 = element("a");
			t50 = text("postal code");
			t51 = text(" validators");
			t52 = space();
			li8 = element("li");
			t53 = text("Add Portugal ");
			a9 = element("a");
			t54 = text("postal code");
			t55 = text(" validator");
			t56 = space();
			li9 = element("li");
			t57 = text("Add ");
			code7 = element("code");
			t58 = text("autoFocus");
			t59 = text(" option");
			t60 = space();
			li10 = element("li");
			t61 = text("Add Austria and Switzerland ");
			a10 = element("a");
			t62 = text("postal code");
			t63 = text(" validators");
			t64 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t65 = space();
			ul1 = element("ul");
			li11 = element("li");
			t66 = text("The ");
			a11 = element("a");
			t67 = text("color");
			t68 = text(" validator only accepts 6 hex character values when using HTML 5 ");
			code8 = element("code");
			t69 = text("type='color'");
			t70 = text(" attribute");
			t71 = space();
			li12 = element("li");
			t72 = text("Comma separator handling in ");
			a12 = element("a");
			t73 = text("greaterThan");
			t74 = text(", ");
			a13 = element("a");
			t75 = text("lessThan");
			t76 = text(" validators");
			t77 = space();
			li13 = element("li");
			t78 = text("Replace ',' with '.' to validate decimal numbers correct");
			t79 = space();
			li14 = element("li");
			t80 = text("Put tooltip/popover on bottom if there is not enough space on top");
			t81 = space();
			li15 = element("li");
			t82 = text("The ");
			a14 = element("a");
			t83 = text("remote");
			t84 = text(" validator allows to set ");
			code9 = element("code");
			t85 = text("data");
			t86 = text(" options via HTML attributes");
			t87 = space();
			li16 = element("li");
			t88 = text("Enable validator when setting ");
			code10 = element("code");
			t89 = text("data-bv-validatorname=\"data-bv-validatorname\"");
			t90 = space();
			li17 = element("li");
			t91 = text("Requires jQuery 1.9.1 or higher");
			t92 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t93 = space();
			ul2 = element("ul");
			li18 = element("li");
			t94 = text("Fix double submit with defered validators");
			t95 = space();
			li19 = element("li");
			t96 = text("Tooltip/popover isn't destroyed when the field is valid");
			t97 = space();
			li20 = element("li");
			t98 = text("The field is validated only one time when setting ");
			code11 = element("code");
			t99 = text("trigger: 'blur'");
			t100 = text(", ");
			code12 = element("code");
			t101 = text("container: 'tooltip'");
			t102 = space();
			li21 = element("li");
			t103 = text("Fix ");
			code13 = element("code");
			t104 = text("isValidField()");
			t105 = text(" and ");
			code14 = element("code");
			t106 = text("validateField()");
			t107 = text(" methods for fields without validators");
			t108 = space();
			li22 = element("li");
			t109 = text("Fix the issue when using multiple fields with same name, the tooltip of the last element is always shown");
			t110 = space();
			li23 = element("li");
			t111 = text("The ");
			code15 = element("code");
			t112 = text("error.field.bv");
			t113 = text(" event isn't triggered if verbose is set to ");
			code16 = element("code");
			t114 = text("false");
			t115 = space();
			li24 = element("li");
			t116 = text("The ");
			code17 = element("code");
			t117 = text("verbose");
			t118 = text(" option for field doesn't override the form level");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Version 0.5.3");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Released 05 November 2014");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			ul0 = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			li0 = claim_element(ul0_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t5 = claim_text(li0_nodes, "Add ");

			code0 = claim_element(li0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t6 = claim_text(code0_nodes, "min");
			code0_nodes.forEach(detach);
			t7 = claim_text(li0_nodes, ", ");

			code1 = claim_element(li0_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t8 = claim_text(code1_nodes, "max");
			code1_nodes.forEach(detach);
			t9 = claim_text(li0_nodes, " options for the ");

			a0 = claim_element(li0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t10 = claim_text(a0_nodes, "date");
			a0_nodes.forEach(detach);
			t11 = claim_text(li0_nodes, " validator");
			li0_nodes.forEach(detach);
			t12 = claim_text(ul0_nodes, "\n            ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			t13 = claim_text(li1_nodes, "Add ");

			a1 = claim_element(li1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t14 = claim_text(a1_nodes, "color");
			a1_nodes.forEach(detach);
			t15 = claim_text(li1_nodes, " validator");
			li1_nodes.forEach(detach);
			t16 = claim_text(ul0_nodes, "\n            ");

			li2 = claim_element(ul0_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t17 = claim_text(li2_nodes, "The ");

			a2 = claim_element(li2_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t18 = claim_text(a2_nodes, "stringLength");
			a2_nodes.forEach(detach);
			t19 = claim_text(li2_nodes, " validator adds option to evaluate length in UTF-8 bytes");
			li2_nodes.forEach(detach);
			t20 = claim_text(ul0_nodes, "\n            ");

			li3 = claim_element(ul0_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t21 = claim_text(li3_nodes, "Add ");

			code2 = claim_element(li3_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t22 = claim_text(code2_nodes, "trim");
			code2_nodes.forEach(detach);
			t23 = claim_text(li3_nodes, " option for the ");

			a3 = claim_element(li3_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t24 = claim_text(a3_nodes, "stringLength");
			a3_nodes.forEach(detach);
			t25 = claim_text(li3_nodes, " validator");
			li3_nodes.forEach(detach);
			t26 = claim_text(ul0_nodes, "\n            ");

			li4 = claim_element(ul0_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			t27 = claim_text(li4_nodes, "Add ");

			code3 = claim_element(li4_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t28 = claim_text(code3_nodes, "minFiles");
			code3_nodes.forEach(detach);
			t29 = claim_text(li4_nodes, ", ");

			code4 = claim_element(li4_nodes, "CODE", {}, false);
			var code4_nodes = children(code4);

			t30 = claim_text(code4_nodes, "maxFiles");
			code4_nodes.forEach(detach);
			t31 = claim_text(li4_nodes, ", ");

			code5 = claim_element(li4_nodes, "CODE", {}, false);
			var code5_nodes = children(code5);

			t32 = claim_text(code5_nodes, "minTotalSize");
			code5_nodes.forEach(detach);
			t33 = claim_text(li4_nodes, ", ");

			code6 = claim_element(li4_nodes, "CODE", {}, false);
			var code6_nodes = children(code6);

			t34 = claim_text(code6_nodes, "maxTotalSize");
			code6_nodes.forEach(detach);
			t35 = claim_text(li4_nodes, " options for the ");

			a4 = claim_element(li4_nodes, "A", { href: true, class: true }, false);
			var a4_nodes = children(a4);

			t36 = claim_text(a4_nodes, "file");
			a4_nodes.forEach(detach);
			t37 = claim_text(li4_nodes, " validator");
			li4_nodes.forEach(detach);
			t38 = claim_text(ul0_nodes, "\n            ");

			li5 = claim_element(ul0_nodes, "LI", {}, false);
			var li5_nodes = children(li5);

			t39 = claim_text(li5_nodes, "Add France ");

			a5 = claim_element(li5_nodes, "A", { href: true, class: true }, false);
			var a5_nodes = children(a5);

			t40 = claim_text(a5_nodes, "postal code");
			a5_nodes.forEach(detach);
			t41 = claim_text(li5_nodes, " validator");
			li5_nodes.forEach(detach);
			t42 = claim_text(ul0_nodes, "\n            ");

			li6 = claim_element(ul0_nodes, "LI", {}, false);
			var li6_nodes = children(li6);

			t43 = claim_text(li6_nodes, "Add Ireland ");

			a6 = claim_element(li6_nodes, "A", { href: true, class: true }, false);
			var a6_nodes = children(a6);

			t44 = claim_text(a6_nodes, "postal code");
			a6_nodes.forEach(detach);
			t45 = claim_text(li6_nodes, " validator");
			li6_nodes.forEach(detach);
			t46 = claim_text(ul0_nodes, "\n            ");

			li7 = claim_element(ul0_nodes, "LI", {}, false);
			var li7_nodes = children(li7);

			t47 = claim_text(li7_nodes, "Add German ");

			a7 = claim_element(li7_nodes, "A", { href: true, class: true }, false);
			var a7_nodes = children(a7);

			t48 = claim_text(a7_nodes, "phone number");
			a7_nodes.forEach(detach);
			t49 = claim_text(li7_nodes, " and ");

			a8 = claim_element(li7_nodes, "A", { href: true, class: true }, false);
			var a8_nodes = children(a8);

			t50 = claim_text(a8_nodes, "postal code");
			a8_nodes.forEach(detach);
			t51 = claim_text(li7_nodes, " validators");
			li7_nodes.forEach(detach);
			t52 = claim_text(ul0_nodes, "\n            ");

			li8 = claim_element(ul0_nodes, "LI", {}, false);
			var li8_nodes = children(li8);

			t53 = claim_text(li8_nodes, "Add Portugal ");

			a9 = claim_element(li8_nodes, "A", { href: true, class: true }, false);
			var a9_nodes = children(a9);

			t54 = claim_text(a9_nodes, "postal code");
			a9_nodes.forEach(detach);
			t55 = claim_text(li8_nodes, " validator");
			li8_nodes.forEach(detach);
			t56 = claim_text(ul0_nodes, "\n            ");

			li9 = claim_element(ul0_nodes, "LI", {}, false);
			var li9_nodes = children(li9);

			t57 = claim_text(li9_nodes, "Add ");

			code7 = claim_element(li9_nodes, "CODE", {}, false);
			var code7_nodes = children(code7);

			t58 = claim_text(code7_nodes, "autoFocus");
			code7_nodes.forEach(detach);
			t59 = claim_text(li9_nodes, " option");
			li9_nodes.forEach(detach);
			t60 = claim_text(ul0_nodes, "\n            ");

			li10 = claim_element(ul0_nodes, "LI", {}, false);
			var li10_nodes = children(li10);

			t61 = claim_text(li10_nodes, "Add Austria and Switzerland ");

			a10 = claim_element(li10_nodes, "A", { href: true, class: true }, false);
			var a10_nodes = children(a10);

			t62 = claim_text(a10_nodes, "postal code");
			a10_nodes.forEach(detach);
			t63 = claim_text(li10_nodes, " validators");
			li10_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t64 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t65 = claim_text(section1_nodes, "\n        ");

			ul1 = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li11 = claim_element(ul1_nodes, "LI", {}, false);
			var li11_nodes = children(li11);

			t66 = claim_text(li11_nodes, "The ");

			a11 = claim_element(li11_nodes, "A", { href: true, class: true }, false);
			var a11_nodes = children(a11);

			t67 = claim_text(a11_nodes, "color");
			a11_nodes.forEach(detach);
			t68 = claim_text(li11_nodes, " validator only accepts 6 hex character values when using HTML 5 ");

			code8 = claim_element(li11_nodes, "CODE", {}, false);
			var code8_nodes = children(code8);

			t69 = claim_text(code8_nodes, "type='color'");
			code8_nodes.forEach(detach);
			t70 = claim_text(li11_nodes, " attribute");
			li11_nodes.forEach(detach);
			t71 = claim_text(ul1_nodes, "\n            ");

			li12 = claim_element(ul1_nodes, "LI", {}, false);
			var li12_nodes = children(li12);

			t72 = claim_text(li12_nodes, "Comma separator handling in ");

			a12 = claim_element(li12_nodes, "A", { href: true }, false);
			var a12_nodes = children(a12);

			t73 = claim_text(a12_nodes, "greaterThan");
			a12_nodes.forEach(detach);
			t74 = claim_text(li12_nodes, ", ");

			a13 = claim_element(li12_nodes, "A", { href: true, class: true }, false);
			var a13_nodes = children(a13);

			t75 = claim_text(a13_nodes, "lessThan");
			a13_nodes.forEach(detach);
			t76 = claim_text(li12_nodes, " validators");
			li12_nodes.forEach(detach);
			t77 = claim_text(ul1_nodes, "\n            ");

			li13 = claim_element(ul1_nodes, "LI", {}, false);
			var li13_nodes = children(li13);

			t78 = claim_text(li13_nodes, "Replace ',' with '.' to validate decimal numbers correct");
			li13_nodes.forEach(detach);
			t79 = claim_text(ul1_nodes, "\n            ");

			li14 = claim_element(ul1_nodes, "LI", {}, false);
			var li14_nodes = children(li14);

			t80 = claim_text(li14_nodes, "Put tooltip/popover on bottom if there is not enough space on top");
			li14_nodes.forEach(detach);
			t81 = claim_text(ul1_nodes, "\n            ");

			li15 = claim_element(ul1_nodes, "LI", {}, false);
			var li15_nodes = children(li15);

			t82 = claim_text(li15_nodes, "The ");

			a14 = claim_element(li15_nodes, "A", { href: true, class: true }, false);
			var a14_nodes = children(a14);

			t83 = claim_text(a14_nodes, "remote");
			a14_nodes.forEach(detach);
			t84 = claim_text(li15_nodes, " validator allows to set ");

			code9 = claim_element(li15_nodes, "CODE", {}, false);
			var code9_nodes = children(code9);

			t85 = claim_text(code9_nodes, "data");
			code9_nodes.forEach(detach);
			t86 = claim_text(li15_nodes, " options via HTML attributes");
			li15_nodes.forEach(detach);
			t87 = claim_text(ul1_nodes, "\n            ");

			li16 = claim_element(ul1_nodes, "LI", {}, false);
			var li16_nodes = children(li16);

			t88 = claim_text(li16_nodes, "Enable validator when setting ");

			code10 = claim_element(li16_nodes, "CODE", {}, false);
			var code10_nodes = children(code10);

			t89 = claim_text(code10_nodes, "data-bv-validatorname=\"data-bv-validatorname\"");
			code10_nodes.forEach(detach);
			li16_nodes.forEach(detach);
			t90 = claim_text(ul1_nodes, "\n            ");

			li17 = claim_element(ul1_nodes, "LI", {}, false);
			var li17_nodes = children(li17);

			t91 = claim_text(li17_nodes, "Requires jQuery 1.9.1 or higher");
			li17_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t92 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t93 = claim_text(section2_nodes, "\n        ");

			ul2 = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul2_nodes = children(ul2);

			li18 = claim_element(ul2_nodes, "LI", {}, false);
			var li18_nodes = children(li18);

			t94 = claim_text(li18_nodes, "Fix double submit with defered validators");
			li18_nodes.forEach(detach);
			t95 = claim_text(ul2_nodes, "\n            ");

			li19 = claim_element(ul2_nodes, "LI", {}, false);
			var li19_nodes = children(li19);

			t96 = claim_text(li19_nodes, "Tooltip/popover isn't destroyed when the field is valid");
			li19_nodes.forEach(detach);
			t97 = claim_text(ul2_nodes, "\n            ");

			li20 = claim_element(ul2_nodes, "LI", {}, false);
			var li20_nodes = children(li20);

			t98 = claim_text(li20_nodes, "The field is validated only one time when setting ");

			code11 = claim_element(li20_nodes, "CODE", {}, false);
			var code11_nodes = children(code11);

			t99 = claim_text(code11_nodes, "trigger: 'blur'");
			code11_nodes.forEach(detach);
			t100 = claim_text(li20_nodes, ", ");

			code12 = claim_element(li20_nodes, "CODE", {}, false);
			var code12_nodes = children(code12);

			t101 = claim_text(code12_nodes, "container: 'tooltip'");
			code12_nodes.forEach(detach);
			li20_nodes.forEach(detach);
			t102 = claim_text(ul2_nodes, "\n            ");

			li21 = claim_element(ul2_nodes, "LI", {}, false);
			var li21_nodes = children(li21);

			t103 = claim_text(li21_nodes, "Fix ");

			code13 = claim_element(li21_nodes, "CODE", {}, false);
			var code13_nodes = children(code13);

			t104 = claim_text(code13_nodes, "isValidField()");
			code13_nodes.forEach(detach);
			t105 = claim_text(li21_nodes, " and ");

			code14 = claim_element(li21_nodes, "CODE", {}, false);
			var code14_nodes = children(code14);

			t106 = claim_text(code14_nodes, "validateField()");
			code14_nodes.forEach(detach);
			t107 = claim_text(li21_nodes, " methods for fields without validators");
			li21_nodes.forEach(detach);
			t108 = claim_text(ul2_nodes, "\n            ");

			li22 = claim_element(ul2_nodes, "LI", {}, false);
			var li22_nodes = children(li22);

			t109 = claim_text(li22_nodes, "Fix the issue when using multiple fields with same name, the tooltip of the last element is always shown");
			li22_nodes.forEach(detach);
			t110 = claim_text(ul2_nodes, "\n            ");

			li23 = claim_element(ul2_nodes, "LI", {}, false);
			var li23_nodes = children(li23);

			t111 = claim_text(li23_nodes, "The ");

			code15 = claim_element(li23_nodes, "CODE", {}, false);
			var code15_nodes = children(code15);

			t112 = claim_text(code15_nodes, "error.field.bv");
			code15_nodes.forEach(detach);
			t113 = claim_text(li23_nodes, " event isn't triggered if verbose is set to ");

			code16 = claim_element(li23_nodes, "CODE", {}, false);
			var code16_nodes = children(code16);

			t114 = claim_text(code16_nodes, "false");
			code16_nodes.forEach(detach);
			li23_nodes.forEach(detach);
			t115 = claim_text(ul2_nodes, "\n            ");

			li24 = claim_element(ul2_nodes, "LI", {}, false);
			var li24_nodes = children(li24);

			t116 = claim_text(li24_nodes, "The ");

			code17 = claim_element(li24_nodes, "CODE", {}, false);
			var code17_nodes = children(code17);

			t117 = claim_text(code17_nodes, "verbose");
			code17_nodes.forEach(detach);
			t118 = claim_text(li24_nodes, " option for field doesn't override the form level");
			li24_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 92);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 143);
			add_location(code0, file, 11, 20, 324);
			add_location(code1, file, 11, 38, 342);
			a0.href = "/guide/validators/date";
			a0.className = "blue dim link";
			add_location(a0, file, 11, 71, 375);
			add_location(li0, file, 11, 12, 316);
			a1.href = "/guide/validators/color";
			a1.className = "blue dim link";
			add_location(a1, file, 12, 20, 474);
			add_location(li1, file, 12, 12, 466);
			a2.href = "/guide/validators/string-length";
			a2.className = "blue dim link";
			add_location(a2, file, 13, 20, 575);
			add_location(li2, file, 13, 12, 567);
			add_location(code2, file, 14, 20, 737);
			a3.href = "/guide/validators/string-length";
			a3.className = "blue dim link";
			add_location(a3, file, 14, 53, 770);
			add_location(li3, file, 14, 12, 729);
			add_location(code3, file, 15, 20, 886);
			add_location(code4, file, 15, 43, 909);
			add_location(code5, file, 15, 66, 932);
			add_location(code6, file, 15, 93, 959);
			a4.href = "/guide/validators/file";
			a4.className = "blue dim link";
			add_location(a4, file, 15, 135, 1001);
			add_location(li4, file, 15, 12, 878);
			a5.href = "/guide/validators/zip-code";
			a5.className = "blue dim link";
			add_location(a5, file, 16, 27, 1107);
			add_location(li5, file, 16, 12, 1092);
			a6.href = "/guide/validators/zip-code";
			a6.className = "blue dim link";
			add_location(a6, file, 17, 28, 1225);
			add_location(li6, file, 17, 12, 1209);
			a7.href = "/guide/validators/phone";
			a7.className = "blue dim link";
			add_location(a7, file, 18, 27, 1342);
			a8.href = "/guide/validators/zip-code";
			a8.className = "blue dim link";
			add_location(a8, file, 18, 104, 1419);
			add_location(li7, file, 18, 12, 1327);
			a9.href = "/guide/validators/zip-code";
			a9.className = "blue dim link";
			add_location(a9, file, 19, 29, 1539);
			add_location(li8, file, 19, 12, 1522);
			add_location(code7, file, 20, 20, 1649);
			add_location(li9, file, 20, 12, 1641);
			a10.href = "/guide/validators/zip-code";
			a10.className = "blue dim link";
			add_location(a10, file, 21, 44, 1728);
			add_location(li10, file, 21, 12, 1696);
			ul0.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul0, file, 10, 8, 271);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 201);
			a11.href = "/guide/validators/color";
			a11.className = "blue dim link";
			add_location(a11, file, 28, 20, 1976);
			add_location(code8, file, 28, 150, 2106);
			add_location(li11, file, 28, 12, 1968);
			a12.href = "/guide/validators/greater-than/";
			add_location(a12, file, 29, 44, 2191);
			a13.href = "/guide/validators/less-than";
			a13.className = "blue dim link";
			add_location(a13, file, 29, 103, 2250);
			add_location(li12, file, 29, 12, 2159);
			add_location(li13, file, 30, 12, 2351);
			add_location(li14, file, 31, 12, 2429);
			a14.href = "/guide/validators/remote";
			a14.className = "blue dim link";
			add_location(a14, file, 32, 20, 2524);
			add_location(code9, file, 32, 112, 2616);
			add_location(li15, file, 32, 12, 2516);
			add_location(code10, file, 33, 46, 2713);
			add_location(li16, file, 33, 12, 2679);
			add_location(li17, file, 34, 12, 2789);
			ul1.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul1, file, 27, 8, 1923);
			section1.className = "mv5";
			add_location(section1, file, 25, 4, 1853);
			add_location(li18, file, 41, 12, 2976);
			add_location(li19, file, 42, 12, 3039);
			add_location(code11, file, 43, 66, 3170);
			add_location(code12, file, 43, 96, 3200);
			add_location(li20, file, 43, 12, 3116);
			add_location(code13, file, 44, 20, 3259);
			add_location(code14, file, 44, 52, 3291);
			add_location(li21, file, 44, 12, 3251);
			add_location(li22, file, 45, 12, 3375);
			add_location(code15, file, 46, 20, 3509);
			add_location(code16, file, 46, 91, 3580);
			add_location(li23, file, 46, 12, 3501);
			add_location(code17, file, 47, 20, 3624);
			add_location(li24, file, 47, 12, 3616);
			ul2.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul2, file, 40, 8, 2931);
			section2.className = "mv5";
			add_location(section2, file, 38, 4, 2864);
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
			append(section0, ul0);
			append(ul0, li0);
			append(li0, t5);
			append(li0, code0);
			append(code0, t6);
			append(li0, t7);
			append(li0, code1);
			append(code1, t8);
			append(li0, t9);
			append(li0, a0);
			append(a0, t10);
			append(li0, t11);
			append(ul0, t12);
			append(ul0, li1);
			append(li1, t13);
			append(li1, a1);
			append(a1, t14);
			append(li1, t15);
			append(ul0, t16);
			append(ul0, li2);
			append(li2, t17);
			append(li2, a2);
			append(a2, t18);
			append(li2, t19);
			append(ul0, t20);
			append(ul0, li3);
			append(li3, t21);
			append(li3, code2);
			append(code2, t22);
			append(li3, t23);
			append(li3, a3);
			append(a3, t24);
			append(li3, t25);
			append(ul0, t26);
			append(ul0, li4);
			append(li4, t27);
			append(li4, code3);
			append(code3, t28);
			append(li4, t29);
			append(li4, code4);
			append(code4, t30);
			append(li4, t31);
			append(li4, code5);
			append(code5, t32);
			append(li4, t33);
			append(li4, code6);
			append(code6, t34);
			append(li4, t35);
			append(li4, a4);
			append(a4, t36);
			append(li4, t37);
			append(ul0, t38);
			append(ul0, li5);
			append(li5, t39);
			append(li5, a5);
			append(a5, t40);
			append(li5, t41);
			append(ul0, t42);
			append(ul0, li6);
			append(li6, t43);
			append(li6, a6);
			append(a6, t44);
			append(li6, t45);
			append(ul0, t46);
			append(ul0, li7);
			append(li7, t47);
			append(li7, a7);
			append(a7, t48);
			append(li7, t49);
			append(li7, a8);
			append(a8, t50);
			append(li7, t51);
			append(ul0, t52);
			append(ul0, li8);
			append(li8, t53);
			append(li8, a9);
			append(a9, t54);
			append(li8, t55);
			append(ul0, t56);
			append(ul0, li9);
			append(li9, t57);
			append(li9, code7);
			append(code7, t58);
			append(li9, t59);
			append(ul0, t60);
			append(ul0, li10);
			append(li10, t61);
			append(li10, a10);
			append(a10, t62);
			append(li10, t63);
			insert(target, t64, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t65);
			append(section1, ul1);
			append(ul1, li11);
			append(li11, t66);
			append(li11, a11);
			append(a11, t67);
			append(li11, t68);
			append(li11, code8);
			append(code8, t69);
			append(li11, t70);
			append(ul1, t71);
			append(ul1, li12);
			append(li12, t72);
			append(li12, a12);
			append(a12, t73);
			append(li12, t74);
			append(li12, a13);
			append(a13, t75);
			append(li12, t76);
			append(ul1, t77);
			append(ul1, li13);
			append(li13, t78);
			append(ul1, t79);
			append(ul1, li14);
			append(li14, t80);
			append(ul1, t81);
			append(ul1, li15);
			append(li15, t82);
			append(li15, a14);
			append(a14, t83);
			append(li15, t84);
			append(li15, code9);
			append(code9, t85);
			append(li15, t86);
			append(ul1, t87);
			append(ul1, li16);
			append(li16, t88);
			append(li16, code10);
			append(code10, t89);
			append(ul1, t90);
			append(ul1, li17);
			append(li17, t91);
			insert(target, t92, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t93);
			append(section2, ul2);
			append(ul2, li18);
			append(li18, t94);
			append(ul2, t95);
			append(ul2, li19);
			append(li19, t96);
			append(ul2, t97);
			append(ul2, li20);
			append(li20, t98);
			append(li20, code11);
			append(code11, t99);
			append(li20, t100);
			append(li20, code12);
			append(code12, t101);
			append(ul2, t102);
			append(ul2, li21);
			append(li21, t103);
			append(li21, code13);
			append(code13, t104);
			append(li21, t105);
			append(li21, code14);
			append(code14, t106);
			append(li21, t107);
			append(ul2, t108);
			append(ul2, li22);
			append(li22, t109);
			append(ul2, t110);
			append(ul2, li23);
			append(li23, t111);
			append(li23, code15);
			append(code15, t112);
			append(li23, t113);
			append(li23, code16);
			append(code16, t114);
			append(ul2, t115);
			append(ul2, li24);
			append(li24, t116);
			append(li24, code17);
			append(code17, t117);
			append(li24, t118);
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
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
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

			if (detaching) {
				detach(t64);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t92);
				detach(section2);
			}

			heading2.$destroy();
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var changeloglayout = new ChangelogLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			changeloglayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			changeloglayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • v0.5.3";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(changeloglayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var changeloglayout_changes = {};
			if (changed.$$scope) changeloglayout_changes.$$scope = { changed, ctx };
			changeloglayout.$set(changeloglayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			changeloglayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			changeloglayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			changeloglayout.$destroy(detaching);
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
