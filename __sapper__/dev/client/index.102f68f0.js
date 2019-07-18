import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';

/* src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-checkbox-list-placed-in-multiple-columns/index.svelte";

// (58:4) <Tip>
function create_default_slot_1(ctx) {
	var t0, code, t1, t2, span, t3, t4, a0, t5, t6, a1, t7, t8;

	return {
		c: function create() {
			t0 = text("You should look at the ");
			code = element("code");
			t1 = text("rowSelector");
			t2 = text(" option when using multiple fields on the same row. Refer to the ");
			span = element("span");
			t3 = text("Multiple fields on the same row");
			t4 = text(" section when using with plugin supports popular CSS framework, such as \n        ");
			a0 = element("a");
			t5 = text("Bootstrap");
			t6 = text(", ");
			a1 = element("a");
			t7 = text("Tachyons");
			t8 = text(", .etc");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "You should look at the ");

			code = claim_element(nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t1 = claim_text(code_nodes, "rowSelector");
			code_nodes.forEach(detach);
			t2 = claim_text(nodes, " option when using multiple fields on the same row. Refer to the ");

			span = claim_element(nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t3 = claim_text(span_nodes, "Multiple fields on the same row");
			span_nodes.forEach(detach);
			t4 = claim_text(nodes, " section when using with plugin supports popular CSS framework, such as \n        ");

			a0 = claim_element(nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			t5 = claim_text(a0_nodes, "Bootstrap");
			a0_nodes.forEach(detach);
			t6 = claim_text(nodes, ", ");

			a1 = claim_element(nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t7 = claim_text(a1_nodes, "Tachyons");
			a1_nodes.forEach(detach);
			t8 = claim_text(nodes, ", .etc");
			this.h();
		},

		h: function hydrate() {
			add_location(code, file, 58, 31, 2406);
			span.className = "i";
			add_location(span, file, 58, 120, 2495);
			a0.href = "/guide/plugins/bootstrap#multiple-fields-on-the-same-row";
			add_location(a0, file, 59, 8, 2630);
			a1.href = "/guide/plugins/tachyons#multiple-fields-on-the-same-row";
			a1.className = "blue dim link";
			add_location(a1, file, 59, 90, 2712);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, code, anchor);
			append(code, t1);
			insert(target, t2, anchor);
			insert(target, span, anchor);
			append(span, t3);
			insert(target, t4, anchor);
			insert(target, a0, anchor);
			append(a0, t5);
			insert(target, t6, anchor);
			insert(target, a1, anchor);
			append(a1, t7);
			insert(target, t8, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(code);
				detach(t2);
				detach(span);
				detach(t4);
				detach(a0);
				detach(t6);
				detach(a1);
				detach(t8);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, p0, t2, t3, p1, t4, code0, t5, t6, a0, t7, t8, t9, p2, t10, t11, t12, p3, t13, code1, t14, t15, a1, t16, t17, t18, t19, t20, p4, t21, code2, t22, t23, a2, t24, t25, t26, t27, p5, t28, t29, t30, p6, t31, a3, t32, t33, t34, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<div class="cf mb2">
    <div class="fl w-100">
        <div class="fl w-25 pa2">Alert on</div>
        <div class="fl w-75">
            <div class="w-100 js-alert-field-container">
                <div class="fl w-50">
                    <!-- The first three checkboxes ... -->
                </div>
                <div class="fl w-50">
                    <!-- The other three checkboxes ... -->
                </div>

                <!-- The feedback icon will be placed here -->
                <div id="alertDayIcon"></div>
            </div>
        </div>
    </div>
</div>

<div class="cf mb2">
    <div class="fl w-100">
        <div class="fl w-25 pa2"></div>
        <div class="fl w-75">
            <!-- The container to show the error of checkboxes -->
            <div id="alertDayMessage"></div>
        </div>
    </div>
</div>   
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        tachyons: new FormValidation.plugins.Tachyons({
            rowSelector: function(field, ele) {
                return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
            },
        }),
    },
});
` },
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        icon: new FormValidation.plugins.Icon({
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh',
            onPlaced: function(e) {
                if (e.field === 'alertDay') {
                    document.getElementById('alertDayIcon').appendChild(e.iconElement);
                }
            },
        }),
    },
});
` },
		$$inline: true
	});

	var samplecode3 = new SampleCode({
		props: { lang: "javascript", code: `
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        message: new FormValidation.plugins.Message({
            clazz: 'red lh-copy',
            container: function(field, ele) {
                return field === 'alertDay'
                        ? document.getElementById('alertDayMessage')
                        : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
            },
        }),        
    },
});
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/validating-checkbox-list-placed-in-multiple-columns",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Validating checkbox list placed in multiple columns");
			t1 = space();
			p0 = element("p");
			t2 = text("In this example, you will see how to validate a list of checkboxes which are placed in multiple columns.");
			t3 = space();
			p1 = element("p");
			t4 = text("The following form asks us to choose at least one day that we will be notified when the event is going to happen.\n        The list of days are placed inside two columns which have the same ");
			code0 = element("code");
			t5 = text("w-50");
			t6 = text(" class (assuming you're using the ");
			a0 = element("a");
			t7 = text("Tachyons");
			t8 = text(" framework).");
			t9 = space();
			p2 = element("p");
			t10 = text("We need to define the elements that display the feedback icon and error message:");
			t11 = space();
			samplecode0.$$.fragment.c();
			t12 = space();
			p3 = element("p");
			t13 = text("The checkboxes are placed in the same row, inside ");
			code1 = element("code");
			t14 = text(".js-alert-field-container");
			t15 = text(" element. We need to let the ");
			a1 = element("a");
			t16 = text("Tachyons");
			t17 = text(" plugin know how it can find these fields:");
			t18 = space();
			samplecode1.$$.fragment.c();
			t19 = space();
			tip.$$.fragment.c();
			t20 = space();
			p4 = element("p");
			t21 = text("To show the feedback icon at the element ");
			code2 = element("code");
			t22 = text("#alertDayIcon");
			t23 = text(", we need to use ");
			a2 = element("a");
			t24 = text("onPlaced");
			t25 = text(" option which is called when the icon element is inserted to the document:");
			t26 = space();
			samplecode2.$$.fragment.c();
			t27 = space();
			p5 = element("p");
			t28 = text("The last step is to indicate the container where the associated messages are shown:");
			t29 = space();
			samplecode3.$$.fragment.c();
			t30 = space();
			p6 = element("p");
			t31 = text("Look at the ");
			a3 = element("a");
			t32 = text("Showing messages in custom area");
			t33 = text(" section for more details.");
			t34 = space();
			demo.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Validating checkbox list placed in multiple columns");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n    ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In this example, you will see how to validate a list of checkboxes which are placed in multiple columns.");
			p0_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n    ");

			p1 = claim_element(nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, "The following form asks us to choose at least one day that we will be notified when the event is going to happen.\n        The list of days are placed inside two columns which have the same ");

			code0 = claim_element(p1_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t5 = claim_text(code0_nodes, "w-50");
			code0_nodes.forEach(detach);
			t6 = claim_text(p1_nodes, " class (assuming you're using the ");

			a0 = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t7 = claim_text(a0_nodes, "Tachyons");
			a0_nodes.forEach(detach);
			t8 = claim_text(p1_nodes, " framework).");
			p1_nodes.forEach(detach);
			t9 = claim_text(nodes, "\n    ");

			p2 = claim_element(nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t10 = claim_text(p2_nodes, "We need to define the elements that display the feedback icon and error message:");
			p2_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n");
			samplecode0.$$.fragment.l(nodes);
			t12 = claim_text(nodes, "\n    ");

			p3 = claim_element(nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t13 = claim_text(p3_nodes, "The checkboxes are placed in the same row, inside ");

			code1 = claim_element(p3_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t14 = claim_text(code1_nodes, ".js-alert-field-container");
			code1_nodes.forEach(detach);
			t15 = claim_text(p3_nodes, " element. We need to let the ");

			a1 = claim_element(p3_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t16 = claim_text(a1_nodes, "Tachyons");
			a1_nodes.forEach(detach);
			t17 = claim_text(p3_nodes, " plugin know how it can find these fields:");
			p3_nodes.forEach(detach);
			t18 = claim_text(nodes, "\n");
			samplecode1.$$.fragment.l(nodes);
			t19 = claim_text(nodes, "\n    ");
			tip.$$.fragment.l(nodes);
			t20 = claim_text(nodes, "\n    ");

			p4 = claim_element(nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t21 = claim_text(p4_nodes, "To show the feedback icon at the element ");

			code2 = claim_element(p4_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t22 = claim_text(code2_nodes, "#alertDayIcon");
			code2_nodes.forEach(detach);
			t23 = claim_text(p4_nodes, ", we need to use ");

			a2 = claim_element(p4_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t24 = claim_text(a2_nodes, "onPlaced");
			a2_nodes.forEach(detach);
			t25 = claim_text(p4_nodes, " option which is called when the icon element is inserted to the document:");
			p4_nodes.forEach(detach);
			t26 = claim_text(nodes, "\n");
			samplecode2.$$.fragment.l(nodes);
			t27 = claim_text(nodes, "\n    ");

			p5 = claim_element(nodes, "P", { class: true }, false);
			var p5_nodes = children(p5);

			t28 = claim_text(p5_nodes, "The last step is to indicate the container where the associated messages are shown:");
			p5_nodes.forEach(detach);
			t29 = claim_text(nodes, "\n");
			samplecode3.$$.fragment.l(nodes);
			t30 = claim_text(nodes, "\n    ");

			p6 = claim_element(nodes, "P", { class: true }, false);
			var p6_nodes = children(p6);

			t31 = claim_text(p6_nodes, "Look at the ");

			a3 = claim_element(p6_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t32 = claim_text(a3_nodes, "Showing messages in custom area");
			a3_nodes.forEach(detach);
			t33 = claim_text(p6_nodes, " section for more details.");
			p6_nodes.forEach(detach);
			t34 = claim_text(nodes, "\n    ");
			demo.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 133);
			p0.className = "lh-copy";
			add_location(p0, file, 7, 4, 218);
			add_location(code0, file, 9, 75, 558);
			a0.href = "/guide/plugins/tachyons";
			a0.className = "blue dim link";
			add_location(a0, file, 9, 126, 609);
			p1.className = "lh-copy";
			add_location(p1, file, 8, 4, 350);
			p2.className = "lh-copy";
			add_location(p2, file, 10, 4, 698);
			add_location(code1, file, 41, 73, 1767);
			a1.href = "/guide/plugins/tachyons";
			a1.className = "blue dim link";
			add_location(a1, file, 41, 140, 1834);
			p3.className = "lh-copy";
			add_location(p3, file, 41, 4, 1698);
			add_location(code2, file, 61, 64, 2894);
			a2.href = "/guide/examples/showing-icons-in-custom-area";
			a2.className = "blue dim link";
			add_location(a2, file, 61, 107, 2937);
			p4.className = "lh-copy";
			add_location(p4, file, 61, 4, 2834);
			p5.className = "lh-copy";
			add_location(p5, file, 81, 4, 3635);
			a3.href = "/guide/plugins/message/#example-showing-messages-in-custom-area";
			a3.className = "blue dim link";
			add_location(a3, file, 99, 35, 4316);
			p6.className = "lh-copy";
			add_location(p6, file, 99, 4, 4285);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, p0, anchor);
			append(p0, t2);
			insert(target, t3, anchor);
			insert(target, p1, anchor);
			append(p1, t4);
			append(p1, code0);
			append(code0, t5);
			append(p1, t6);
			append(p1, a0);
			append(a0, t7);
			append(p1, t8);
			insert(target, t9, anchor);
			insert(target, p2, anchor);
			append(p2, t10);
			insert(target, t11, anchor);
			mount_component(samplecode0, target, anchor);
			insert(target, t12, anchor);
			insert(target, p3, anchor);
			append(p3, t13);
			append(p3, code1);
			append(code1, t14);
			append(p3, t15);
			append(p3, a1);
			append(a1, t16);
			append(p3, t17);
			insert(target, t18, anchor);
			mount_component(samplecode1, target, anchor);
			insert(target, t19, anchor);
			mount_component(tip, target, anchor);
			insert(target, t20, anchor);
			insert(target, p4, anchor);
			append(p4, t21);
			append(p4, code2);
			append(code2, t22);
			append(p4, t23);
			append(p4, a2);
			append(a2, t24);
			append(p4, t25);
			insert(target, t26, anchor);
			mount_component(samplecode2, target, anchor);
			insert(target, t27, anchor);
			insert(target, p5, anchor);
			append(p5, t28);
			insert(target, t29, anchor);
			mount_component(samplecode3, target, anchor);
			insert(target, t30, anchor);
			insert(target, p6, anchor);
			append(p6, t31);
			append(p6, a3);
			append(a3, t32);
			append(p6, t33);
			insert(target, t34, anchor);
			mount_component(demo, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			samplecode3.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			samplecode3.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(p0);
				detach(t3);
				detach(p1);
				detach(t9);
				detach(p2);
				detach(t11);
			}

			samplecode0.$destroy(detaching);

			if (detaching) {
				detach(t12);
				detach(p3);
				detach(t18);
			}

			samplecode1.$destroy(detaching);

			if (detaching) {
				detach(t19);
			}

			tip.$destroy(detaching);

			if (detaching) {
				detach(t20);
				detach(p4);
				detach(t26);
			}

			samplecode2.$destroy(detaching);

			if (detaching) {
				detach(t27);
				detach(p5);
				detach(t29);
			}

			samplecode3.$destroy(detaching);

			if (detaching) {
				detach(t30);
				detach(p6);
				detach(t34);
			}

			demo.$destroy(detaching);
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
			document.title = "FormValidation • Validating checkbox list placed in multiple columns";
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
