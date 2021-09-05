window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3702","name":"django_admin_log","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"django_admin_log"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33681","object_id":"column-33681","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33682","object_id":"column-33682","name":"action_time","name_without_path":"action_time","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33683","object_id":"column-33683","name":"object_id","name_without_path":"object_id","description":null,"is_pk":false,"is_identity":false,"data_type":"longtext","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33684","object_id":"column-33684","name":"object_repr","name_without_path":"object_repr","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"200","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33685","object_id":"column-33685","name":"action_flag","name_without_path":"action_flag","description":null,"is_pk":false,"is_identity":false,"data_type":"unsigned smallint","data_length":"5, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33686","object_id":"column-33686","name":"change_message","name_without_path":"change_message","description":null,"is_pk":false,"is_identity":false,"data_type":"longtext","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33687","object_id":"column-33687","name":"content_type_id","name_without_path":"content_type_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3703","name":"django_content_type","name_show_schema":"django_content_type"}]},{"id":"column-33688","object_id":"column-33688","name":"user_id","name_without_path":"user_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3697","name":"auth_user","name_show_schema":"auth_user"}]}],"relations":[{"name":"django_admin_log_user_id_c564eba6_fk_auth_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"django_admin_log","foreign_table_show_schema":"django_admin_log","foreign_table_verbose":"django_admin_log","foreign_table_verbose_show_schema":"django_admin_log","foreign_table_object_id":"t3702","primary_table":"auth_user","primary_table_show_schema":"auth_user","primary_table_verbose":"auth_user","primary_table_verbose_show_schema":"auth_user","primary_table_object_id":"t3697","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}},{"name":"django_admin_log_content_type_id_c4bce8eb_fk_django_co","title":null,"description":null,"is_user_defined":false,"foreign_table":"django_admin_log","foreign_table_show_schema":"django_admin_log","foreign_table_verbose":"django_admin_log","foreign_table_verbose_show_schema":"django_admin_log","foreign_table_object_id":"t3702","primary_table":"django_content_type","primary_table_show_schema":"django_content_type","primary_table_verbose":"django_content_type","primary_table_verbose_show_schema":"django_content_type","primary_table_object_id":"t3703","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"content_type_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};