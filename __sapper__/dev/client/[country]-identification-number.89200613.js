import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, k as claim_element, l as children, n as add_location, i as text, p as append, q as set_data, P as update_keyed_each, Q as outro_and_destroy_block, z as check_outros, y as on_outro, x as group_outros } from './chunk.989912da.js';
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
import { a as slug } from './chunk.7ee4e2c0.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';
import { a as SampleData } from './chunk.41999a23.js';
import { a as data } from './chunk.259bc606.js';
import { a as random } from './chunk.83a1f42c.js';

/* src/routes/guide/validators/id/[country]-identification-number.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/id/[country]-identification-number.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.sample = list[i];
	return child_ctx;
}

// (10:8) <Heading>
function create_default_slot_6(ctx) {
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

// (17:12) {#each examples as sample (sample)}
function create_each_block(key_1, ctx) {
	var tr, current;

	var sampledata = new SampleData({
		props: {
		sample: { sample: ctx.sample },
		renderSample: func,
		sender: "/guide/validators/id/basic-" + ctx.countryCode
	},
		$$inline: true
	});

	return {
		key: key_1,

		first: null,

		c: function create() {
			tr = element("tr");
			sampledata.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", { class: true }, false);
			var tr_nodes = children(tr);

			sampledata.$$.fragment.l(tr_nodes);
			tr_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			tr.className = "striped--light-gray";
			add_location(tr, file, 17, 12, 800);
			this.first = tr;
		},

		m: function mount(target, anchor) {
			insert(target, tr, anchor);
			mount_component(sampledata, tr, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var sampledata_changes = {};
			if (changed.examples) sampledata_changes.sample = { sample: ctx.sample };
			if (changed.countryCode) sampledata_changes.sender = "/guide/validators/id/basic-" + ctx.countryCode;
			sampledata.$set(sampledata_changes);
		},

		i: function intro(local) {
			if (current) return;
			sampledata.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			sampledata.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(tr);
			}

			sampledata.$destroy();
		}
	};
}

// (28:8) <Heading>
function create_default_slot_5(ctx) {
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

// (49:12) {:else}
function create_else_block_1(ctx) {
	var current;

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/id/" + slug(data[ctx.index - 1].adjective) + "-identification-number",
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			prevbutton.$$.fragment.c();
		},

		l: function claim(nodes) {
			prevbutton.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(prevbutton, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var prevbutton_changes = {};
			if (changed.slug || changed.data || changed.index) prevbutton_changes.target = "/guide/validators/id/" + slug(data[ctx.index - 1].adjective) + "-identification-number";
			if (changed.$$scope || changed.index) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			prevbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			prevbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			prevbutton.$destroy(detaching);
		}
	};
}

// (47:12) {#if index === 0}
function create_if_block_1(ctx) {
	var current;

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/id",
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			prevbutton.$$.fragment.c();
		},

		l: function claim(nodes) {
			prevbutton.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(prevbutton, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			prevbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			prevbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			prevbutton.$destroy(detaching);
		}
	};
}

// (50:12) <PrevButton target="/guide/validators/id/{slug(data[index - 1].adjective)}-identification-number">
function create_default_slot_4(ctx) {
	var t0_value = data[ctx.index - 1].adjective, t0, t1;

	return {
		c: function create() {
			t0 = text(t0_value);
			t1 = text(" id validator");
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, " id validator");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.index) && t0_value !== (t0_value = data[ctx.index - 1].adjective)) {
				set_data(t0, t0_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(t1);
			}
		}
	};
}

// (48:12) <PrevButton target="/guide/validators/id">
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("id validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "id validator");
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

// (54:12) {:else}
function create_else_block(ctx) {
	var current;

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/id/" + slug(data[ctx.index + 1].adjective) + "-identification-number",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			nextbutton.$$.fragment.c();
		},

		l: function claim(nodes) {
			nextbutton.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(nextbutton, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var nextbutton_changes = {};
			if (changed.slug || changed.data || changed.index) nextbutton_changes.target = "/guide/validators/id/" + slug(data[ctx.index + 1].adjective) + "-identification-number";
			if (changed.$$scope || changed.index) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			nextbutton.$destroy(detaching);
		}
	};
}

// (52:12) {#if index === numIdValidators - 1}
function create_if_block(ctx) {
	var current;

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/identical",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			nextbutton.$$.fragment.c();
		},

		l: function claim(nodes) {
			nextbutton.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(nextbutton, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			nextbutton.$destroy(detaching);
		}
	};
}

// (55:12) <NextButton target="/guide/validators/id/{slug(data[index + 1].adjective)}-identification-number">
function create_default_slot_2(ctx) {
	var t0_value = data[ctx.index + 1].adjective, t0, t1;

	return {
		c: function create() {
			t0 = text(t0_value);
			t1 = text(" id validator");
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_text(nodes, " id validator");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.index) && t0_value !== (t0_value = data[ctx.index + 1].adjective)) {
				set_data(t0, t0_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(t1);
			}
		}
	};
}

// (53:12) <NextButton target="/guide/validators/identical">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("identical validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "identical validator");
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
	var h1, t0, t1, h2, t2, t3_value = ctx.item.adjective, t3, t4, t5, section0, t6, p0, t7, t8_value = ctx.item.adjective, t8, t9, t10, table, tr, th0, t11, t12, th1, t13, t14, each_blocks = [], each_1_lookup = new Map(), t15, t16, section1, t17, p1, t18, t19, t20, t21, section2, div, current_block_type_index, if_block0, t22, current_block_type_index_1, if_block1, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var each_value = ctx.examples;

	const get_key = ctx => ctx.sample;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	var demo = new Demo({
		props: {
		prefix: "/guide/validators/id/basic-" + ctx.countryCode,
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import ${ctx.item.code.toLowerCase()}Id from 'formvalidation/dist/es6/validators/id/${ctx.item.code.toLowerCase()}Id';

const res1 = ${ctx.item.code.toLowerCase()}Id().validate('${ctx.validSample}');
// res1.valid === true

const res2 = ${ctx.item.code.toLowerCase()}Id().validate('${ctx.invalidSample}');
// res2.valid === false
` },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['id', 'vat'] },
		$$inline: true
	});

	var if_block_creators = [
		create_if_block_1,
		create_else_block_1
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.index === 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	var if_block_creators_1 = [
		create_if_block,
		create_else_block
	];

	var if_blocks_1 = [];

	function select_block_type_1(ctx) {
		if (ctx.index === ctx.numIdValidators - 1) return 0;
		return 1;
	}

	current_block_type_index_1 = select_block_type_1(ctx);
	if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("id validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Validate a ");
			t3 = text(t3_value);
			t4 = text(" identification number");
			t5 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t6 = space();
			p0 = element("p");
			t7 = text("You can click on sample from the following table to see if it's a valid or invalid ");
			t8 = text(t8_value);
			t9 = text(" id.");
			t10 = space();
			table = element("table");
			tr = element("tr");
			th0 = element("th");
			t11 = text("Sample ID");
			t12 = space();
			th1 = element("th");
			t13 = text("Is it valid?");
			t14 = space();

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();

			t15 = space();
			demo.$$.fragment.c();
			t16 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t17 = space();
			p1 = element("p");
			t18 = text("The following snippet shows how to use the id validator with ES6 module:");
			t19 = space();
			samplecode.$$.fragment.c();
			t20 = space();
			relatedvalidators.$$.fragment.c();
			t21 = space();
			section2 = element("section");
			div = element("div");
			if_block0.c();
			t22 = space();
			if_block1.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "id validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Validate a ");
			t3 = claim_text(h2_nodes, t3_value);
			t4 = claim_text(h2_nodes, " identification number");
			h2_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t6 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t7 = claim_text(p0_nodes, "You can click on sample from the following table to see if it's a valid or invalid ");
			t8 = claim_text(p0_nodes, t8_value);
			t9 = claim_text(p0_nodes, " id.");
			p0_nodes.forEach(detach);
			t10 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr = claim_element(table_nodes, "TR", { class: true }, false);
			var tr_nodes = children(tr);

			th0 = claim_element(tr_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t11 = claim_text(th0_nodes, "Sample ID");
			th0_nodes.forEach(detach);
			t12 = claim_text(tr_nodes, "\n                ");

			th1 = claim_element(tr_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t13 = claim_text(th1_nodes, "Is it valid?");
			th1_nodes.forEach(detach);
			tr_nodes.forEach(detach);
			t14 = claim_text(table_nodes, "\n            ");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].l(table_nodes);

			table_nodes.forEach(detach);
			t15 = claim_text(section0_nodes, "\n\n        ");
			demo.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t16 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t17 = claim_text(section1_nodes, "\n    \n        ");

			p1 = claim_element(section1_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t18 = claim_text(p1_nodes, "The following snippet shows how to use the id validator with ES6 module:");
			p1_nodes.forEach(detach);
			t19 = claim_text(section1_nodes, "\n");
			samplecode.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t20 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t21 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			div = claim_element(section2_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if_block0.l(div_nodes);
			t22 = claim_text(div_nodes, "\n            ");
			if_block1.l(div_nodes);
			div_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 144);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 194);
			p0.className = "lh-copy";
			add_location(p0, file, 10, 8, 347);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 13, 16, 605);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 14, 16, 670);
			tr.className = "striped--light-gray";
			add_location(tr, file, 12, 12, 556);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100 mb4";
			add_location(table, file, 11, 8, 482);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 276);
			p1.className = "lh-copy";
			add_location(p1, file, 29, 8, 1223);
			section1.className = "mv5";
			add_location(section1, file, 26, 4, 1142);
			div.className = "flex";
			add_location(div, file, 45, 8, 1820);
			section2.className = "mv5";
			add_location(section2, file, 44, 4, 1790);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			append(h2, t3);
			append(h2, t4);
			insert(target, t5, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t6);
			append(section0, p0);
			append(p0, t7);
			append(p0, t8);
			append(p0, t9);
			append(section0, t10);
			append(section0, table);
			append(table, tr);
			append(tr, th0);
			append(th0, t11);
			append(tr, t12);
			append(tr, th1);
			append(th1, t13);
			append(table, t14);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(table, null);

			append(section0, t15);
			mount_component(demo, section0, null);
			insert(target, t16, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t17);
			append(section1, p1);
			append(p1, t18);
			append(section1, t19);
			mount_component(samplecode, section1, null);
			insert(target, t20, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t21, anchor);
			insert(target, section2, anchor);
			append(section2, div);
			if_blocks[current_block_type_index].m(div, null);
			append(div, t22);
			if_blocks_1[current_block_type_index_1].m(div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.item) && t3_value !== (t3_value = ctx.item.adjective)) {
				set_data(t3, t3_value);
			}

			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			if ((!current || changed.item) && t8_value !== (t8_value = ctx.item.adjective)) {
				set_data(t8, t8_value);
			}

			const each_value = ctx.examples;

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, table, outro_and_destroy_block, create_each_block, null, get_each_context);
			check_outros();

			var demo_changes = {};
			if (changed.countryCode) demo_changes.prefix = "/guide/validators/id/basic-" + ctx.countryCode;
			demo.$set(demo_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var samplecode_changes = {};
			if (changed.item || changed.validSample || changed.invalidSample) samplecode_changes.code = `
// You might need to change the importing path
import ${ctx.item.code.toLowerCase()}Id from 'formvalidation/dist/es6/validators/id/${ctx.item.code.toLowerCase()}Id';

const res1 = ${ctx.item.code.toLowerCase()}Id().validate('${ctx.validSample}');
// res1.valid === true

const res2 = ${ctx.item.code.toLowerCase()}Id().validate('${ctx.invalidSample}');
// res2.valid === false
`;
			samplecode.$set(samplecode_changes);

			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block0.o(1);
				check_outros();

				if_block0 = if_blocks[current_block_type_index];
				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				}
				if_block0.i(1);
				if_block0.m(div, t22);
			}

			var previous_block_index_1 = current_block_type_index_1;
			current_block_type_index_1 = select_block_type_1(ctx);
			if (current_block_type_index_1 === previous_block_index_1) {
				if_blocks_1[current_block_type_index_1].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks_1[previous_block_index_1].d(1);
					if_blocks_1[previous_block_index_1] = null;
				});
				if_block1.o(1);
				check_outros();

				if_block1 = if_blocks_1[current_block_type_index_1];
				if (!if_block1) {
					if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
					if_block1.c();
				}
				if_block1.i(1);
				if_block1.m(div, null);
			}
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			demo.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			samplecode.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			if (if_block0) if_block0.i();
			if (if_block1) if_block1.i();
			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].o();

			demo.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			samplecode.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			if (if_block0) if_block0.o();
			if (if_block1) if_block1.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t5);
				detach(section0);
			}

			heading0.$destroy();

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();

			demo.$destroy();

			if (detaching) {
				detach(t16);
				detach(section1);
			}

			heading1.$destroy();

			samplecode.$destroy();

			if (detaching) {
				detach(t20);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t21);
				detach(section2);
			}

			if_blocks[current_block_type_index].d();
			if_blocks_1[current_block_type_index_1].d();
		}
	};
}

function create_fragment(ctx) {
	var title_value, t, current;

	document.title = title_value = "FormValidation • id validator • Validate " + ctx.item.adjective + " identification number";

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
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.item) && title_value !== (title_value = "FormValidation • id validator • Validate " + ctx.item.adjective + " identification number")) {
				document.title = title_value;
			}

			var guidelayout_changes = {};
			if (changed.$$scope || changed.index || changed.numIdValidators || changed.item || changed.validSample || changed.invalidSample || changed.countryCode || changed.examples) guidelayout_changes.$$scope = { changed, ctx };
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

async function preload({ params }) {
const country = params.country;
const item = data.find((item) =>  {
    return item.adjective.toLowerCase().replace(/\s/g, '-') === country;
});
if (!item) {
    return this.error(404, 'Not found');
}

return {
    item,
    index: data.indexOf(item),
    numIdValidators: data.length,
    countryCode: item.code.toLowerCase(),
    examples: item.validExamples.concat(item.invalidExamples),
    invalidSample: random(item.invalidExamples),
    validSample: random(item.validExamples),
};
}
function func(s) {
	return s.sample;
}

function instance($$self, $$props, $$invalidate) {
	

let { item, index, numIdValidators, countryCode, examples, invalidSample, validSample } = $$props;

	$$self.$set = $$props => {
		if ('item' in $$props) $$invalidate('item', item = $$props.item);
		if ('index' in $$props) $$invalidate('index', index = $$props.index);
		if ('numIdValidators' in $$props) $$invalidate('numIdValidators', numIdValidators = $$props.numIdValidators);
		if ('countryCode' in $$props) $$invalidate('countryCode', countryCode = $$props.countryCode);
		if ('examples' in $$props) $$invalidate('examples', examples = $$props.examples);
		if ('invalidSample' in $$props) $$invalidate('invalidSample', invalidSample = $$props.invalidSample);
		if ('validSample' in $$props) $$invalidate('validSample', validSample = $$props.validSample);
	};

	return {
		item,
		index,
		numIdValidators,
		countryCode,
		examples,
		invalidSample,
		validSample
	};
}

class Country_identification_number extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["item", "index", "numIdValidators", "countryCode", "examples", "invalidSample", "validSample"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.item === undefined && !('item' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'item'");
		}
		if (ctx.index === undefined && !('index' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'index'");
		}
		if (ctx.numIdValidators === undefined && !('numIdValidators' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'numIdValidators'");
		}
		if (ctx.countryCode === undefined && !('countryCode' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'countryCode'");
		}
		if (ctx.examples === undefined && !('examples' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'examples'");
		}
		if (ctx.invalidSample === undefined && !('invalidSample' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'invalidSample'");
		}
		if (ctx.validSample === undefined && !('validSample' in props)) {
			console.warn("<Country_identification_number> was created without expected prop 'validSample'");
		}
	}

	get item() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get index() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set index(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get numIdValidators() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set numIdValidators(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get countryCode() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set countryCode(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get examples() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set examples(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get invalidSample() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set invalidSample(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get validSample() {
		throw new Error("<Country_identification_number>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set validSample(value) {
		throw new Error("<Country_identification_number>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Country_identification_number;
export { preload };
