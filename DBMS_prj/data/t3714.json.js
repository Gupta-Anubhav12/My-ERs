window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3714","name":"social_auth_code","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"qYfI2UxniT@remotemysql.com","id":"d4"}},{"field":"Schema","value":""},{"field":"Name","value":"social_auth_code"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-33752","object_id":"column-33752","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33753","object_id":"column-33753","name":"email","name_without_path":"email","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"254","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33754","object_id":"column-33754","name":"code","name_without_path":"code","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"32","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33755","object_id":"column-33755","name":"verified","name_without_path":"verified","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-33756","object_id":"column-33756","name":"timestamp","name_without_path":"timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"social_auth_code_email_code_801b2d02_uniq","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"email","name":"email"},{"path":null,"name_without_path":"code","name":"code"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2020-10-22 16:43"};