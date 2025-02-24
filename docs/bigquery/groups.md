# BigQuery schema: groups

The BigQuery table `gse-roar-assessment:assessment.groups` conforms to the following schema.

| Field name | Data type | Key type | Description |
| :--- | :--- | :---: | :--- |
| group_id | STRING | PK | The unique group ID in the ROAR system |
| document_name | STRING | UK | The database document path |
| timestamp | TIMESTAMP | | A timestamp indicating when the database document was last modified |
| abbreviation | STRING || A human-readable abbreviation for this group |
| archived | BOOLEAN | | Whether this group has been archived or unenrolled |
| current_activation_code | STRING | UK | The group's current parent sign-up activation code |
| family_id | STRING | FK | The ID of the family associated with this group (if this is a sub-group) |
| is_demo_data | BOOLEAN || Indicates whether this group is a demo class |
| is_test_data | BOOLEAN || Indicates whether this group is a test class |
| last_updated | TIMESTAMP | | The date and time this group was last updated in ROAR |
| location_address | STRING || The group address |
| location_city | STRING || The group city |
| location_state | STRING || The group state |
| location_zip | STRING || The group zip code |
| name | STRING || The group name |
| parent_org_id | STRING | FK | The ID of the parent organization (if this is a sub-group) |
| parent_org_type | STRING || The type of parent organization (if this is a sub-group) |
| tags | ARRAY\<STRING> || An array of metadata tags for this group |
| valid_activation_codes | ARRAY\<STRING> | UK | An array of valid activation codes for this group |
