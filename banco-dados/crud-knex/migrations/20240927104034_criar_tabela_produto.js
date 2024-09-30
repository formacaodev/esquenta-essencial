/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	await knex.schema.createTable("produto", function (table) {
		table.increments("id").unique().notNullable();
		table.string("nome").notNullable();
		table.decimal("preco", 10, 2).notNullable().defaultTo(10.0);
	});

	await knex("produto").insert([
		{nome: "Mouse",	preco: 49.99},
		{nome: "Teclado", preco: 89.99},
		{nome: "Headset", preco: 149.99},
		{nome: "Webcam", preco: 874.59},
	]);
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	await knex.schema.dropTableIfExists("produto");
}
