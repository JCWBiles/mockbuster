SELECT * FROM [table name] /*selecting information from an entire table*/
SELECT * FROM [table name] WHERE [column name] = ['specific name']; /*selecting from a particular column*/
SELECT * FROM films  WHERE '' = ANY ("genres"); /*selecting from an array within aparticular column*/
SELECT * FROM films  WHERE '' = ANY ("actors"); /*selecting from an array within a particular column*/
SELECT * FROM films  WHERE '' = ANY ("directors"); /*selecting from an array within a particular column*/
SELECT * FROM films WHERE 'Romance' = ANY ("genres") AND 'Chris Pine' = ANY ("actors"); /*selecting from an array across multiple columns*/
