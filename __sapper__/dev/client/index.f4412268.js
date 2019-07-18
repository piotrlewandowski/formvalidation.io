import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, span0, t3, t4, span1, t5, t6, t7, p1, t8, code, t9, t10, a, t11, t12, t13, t14, current;

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Enabling submit button only when all fields are valid',
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Performing validation if field value exceed given number of characters");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("In the following form, the ");
			span0 = element("span");
			t3 = text("Full name");
			t4 = text(" and ");
			span1 = element("span");
			t5 = text("Phone number");
			t6 = text(" fields will be validated when they have at least 10 and 5 characters, respectively.");
			t7 = space();
			p1 = element("p");
			t8 = text("It is done by using the ");
			code = element("code");
			t9 = text("threshold");
			t10 = text(" option provided by the ");
			a = element("a");
			t11 = text("Trigger plugin");
			t12 = text(". Notice that this option doesn't effect on radio, checkbox, select elements.");
			t13 = space();
			demo.$$.fragment.c();
			t14 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Performing validation if field value exceed given number of characters");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In the following form, the ");

			span0 = claim_element(p0_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			t3 = claim_text(span0_nodes, "Full name");
			span0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " and ");

			span1 = claim_element(p0_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t5 = claim_text(span1_nodes, "Phone number");
			span1_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, " fields will be validated when they have at least 10 and 5 characters, respectively.");
			p0_nodes.forEach(detach);
			t7 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t8 = claim_text(p1_nodes, "It is done by using the ");

			code = claim_element(p1_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t9 = claim_text(code_nodes, "threshold");
			code_nodes.forEach(detach);
			t10 = claim_text(p1_nodes, " option provided by the ");

			a = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t11 = claim_text(a_nodes, "Trigger plugin");
			a_nodes.forEach(detach);
			t12 = claim_text(p1_nodes, ". Notice that this option doesn't effect on radio, checkbox, select elements.");
			p1_nodes.forEach(detach);
			t13 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t14 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 152);
			span0.className = "i";
			add_location(span0, file, 8, 54, 336);
			span1.className = "i";
			add_location(span1, file, 8, 91, 373);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 290);
			add_location(code, file, 9, 51, 548);
			a.href = "/guide/plugins/trigger";
			a.className = "blue dim link";
			add_location(a, file, 9, 97, 594);
			p1.className = "lh-copy";
			add_location(p1, file, 9, 8, 505);
			section.className = "mv5";
			add_location(section, file, 7, 4, 260);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, span0);
			append(span0, t3);
			append(p0, t4);
			append(p0, span1);
			append(span1, t5);
			append(p0, t6);
			append(section, t7);
			append(section, p1);
			append(p1, t8);
			append(p1, code);
			append(code, t9);
			append(p1, t10);
			append(p1, a);
			append(a, t11);
			append(p1, t12);
			append(section, t13);
			mount_component(demo, section, null);
			insert(target, t14, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			demo.$destroy();

			if (detaching) {
				detach(t14);
			}

			examples.$destroy(detaching);
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
			document.title = "FormValidation • Performing validation if field value exceed given number of characters";
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
