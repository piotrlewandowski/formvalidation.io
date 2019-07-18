import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
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

/* src/routes/guide/examples/using-fontawesome-icons/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/using-fontawesome-icons/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, a0, t3, t4, t5, div, t6, p1, t7, a1, t8, t9, t10, t11, current;

	var samplecode = new SampleCode({
		props: { lang: "html", code: `
<!-- Put them in the head tag -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/plugins/bootstrap/horizontal-form",
		frameworks: ['bootstrap']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Adjusting icon position',
        'Showing icons in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Using FontAwesome icons");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("Follow the sample code below to use the icons provided by ");
			a0 = element("a");
			t3 = text("FontAwesome");
			t4 = text(":");
			t5 = space();
			div = element("div");
			samplecode.$$.fragment.c();
			t6 = space();
			p1 = element("p");
			t7 = text("If you want to use the FontAwesome SVG icon instead of its CSS classes, take a look at the ");
			a1 = element("a");
			t8 = text("Using SVG icons");
			t9 = text(" example.");
			t10 = space();
			demo.$$.fragment.c();
			t11 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Using FontAwesome icons");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "Follow the sample code below to use the icons provided by ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "FontAwesome");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, ":");
			p0_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n        ");

			div = claim_element(section_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			samplecode.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			t6 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t7 = claim_text(p1_nodes, "If you want to use the FontAwesome SVG icon instead of its CSS classes, take a look at the ");

			a1 = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t8 = claim_text(a1_nodes, "Using SVG icons");
			a1_nodes.forEach(detach);
			t9 = claim_text(p1_nodes, " example.");
			p1_nodes.forEach(detach);
			t10 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 105);
			a0.href = "https://fontawesome.com";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 85, 273);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 196);
			div.className = "mb4";
			add_location(div, file, 9, 8, 358);
			a1.href = "/guide/examples/using-svg-icons";
			a1.className = "blue dim link";
			add_location(a1, file, 42, 118, 1416);
			p1.className = "lh-copy";
			add_location(p1, file, 42, 8, 1306);
			section.className = "mv5";
			add_location(section, file, 7, 4, 166);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, a0);
			append(a0, t3);
			append(p0, t4);
			append(section, t5);
			append(section, div);
			mount_component(samplecode, div, null);
			append(section, t6);
			append(section, p1);
			append(p1, t7);
			append(p1, a1);
			append(a1, t8);
			append(p1, t9);
			append(section, t10);
			mount_component(demo, section, null);
			insert(target, t11, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
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

			samplecode.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t11);
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
			document.title = "FormValidation • Using FontAwesome icons";
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
