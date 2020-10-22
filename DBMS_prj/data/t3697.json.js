window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3697","name":"auth_user","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"auth_user"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33651","object_id":"column-33651","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33652","object_id":"column-33652","name":"password","name_without_path":"password","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"128","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33653","object_id":"column-33653","name":"last_login","name_without_path":"last_login","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33654","object_id":"column-33654","name":"is_superuser","name_without_path":"is_superuser","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33655","object_id":"column-33655","name":"username","name_without_path":"username","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"150","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33656","object_id":"column-33656","name":"first_name","name_without_path":"first_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"150","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33657","object_id":"column-33657","name":"last_name","name_without_path":"last_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"150","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33658","object_id":"column-33658","name":"email","name_without_path":"email","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"254","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33659","object_id":"column-33659","name":"is_staff","name_without_path":"is_staff","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33660","object_id":"column-33660","name":"is_active","name_without_path":"is_active","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33661","object_id":"column-33661","name":"date_joined","name_without_path":"date_joined","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"auth_user_groups_user_id_6a12ed8b_fk_auth_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"auth_user_groups","foreign_table_show_schema":"auth_user_groups","foreign_table_verbose":"auth_user_groups","foreign_table_verbose_show_schema":"auth_user_groups","foreign_table_object_id":"t3698","primary_table":"auth_user","primary_table_show_schema":"auth_user","primary_table_verbose":"auth_user","primary_table_verbose_show_schema":"auth_user","primary_table_object_id":"t3697","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}},{"name":"auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"auth_user_user_permissions","foreign_table_show_schema":"auth_user_user_permissions","foreign_table_verbose":"auth_user_user_permissions","foreign_table_verbose_show_schema":"auth_user_user_permissions","foreign_table_object_id":"t3699","primary_table":"auth_user","primary_table_show_schema":"auth_user","primary_table_verbose":"auth_user","primary_table_verbose_show_schema":"auth_user","primary_table_object_id":"t3697","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}},{"name":"django_admin_log_user_id_c564eba6_fk_auth_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"django_admin_log","foreign_table_show_schema":"django_admin_log","foreign_table_verbose":"django_admin_log","foreign_table_verbose_show_schema":"django_admin_log","foreign_table_object_id":"t3702","primary_table":"auth_user","primary_table_show_schema":"auth_user","primary_table_verbose":"auth_user","primary_table_verbose_show_schema":"auth_user","primary_table_object_id":"t3697","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}},{"name":"social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"social_auth_usersocialauth","foreign_table_show_schema":"social_auth_usersocialauth","foreign_table_verbose":"social_auth_usersocialauth","foreign_table_verbose_show_schema":"social_auth_usersocialauth","foreign_table_object_id":"t3717","primary_table":"auth_user","primary_table_show_schema":"auth_user","primary_table_verbose":"auth_user","primary_table_verbose_show_schema":"auth_user","primary_table_object_id":"t3697","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"username","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"username","name":"username"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};