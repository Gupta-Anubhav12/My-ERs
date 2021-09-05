window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3711","name":"shop_category","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"shop_category"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33729","object_id":"column-33729","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33730","object_id":"column-33730","name":"name","name_without_path":"name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"150","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33731","object_id":"column-33731","name":"slug","name_without_path":"slug","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"150","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33732","object_id":"column-33732","name":"created_at","name_without_path":"created_at","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33733","object_id":"column-33733","name":"updated_at","name_without_path":"updated_at","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"shop_product_category_id_14d7eea8_fk_shop_category_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"shop_product","foreign_table_show_schema":"shop_product","foreign_table_verbose":"shop_product","foreign_table_verbose_show_schema":"shop_product","foreign_table_object_id":"t3712","primary_table":"shop_category","primary_table_show_schema":"shop_category","primary_table_verbose":"shop_category","primary_table_verbose_show_schema":"shop_category","primary_table_object_id":"t3711","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"category_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"slug","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"slug","name":"slug"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};