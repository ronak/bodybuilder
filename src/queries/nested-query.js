import queries from './index'

/**
 * Construct a Nested query: a query inside a query.
 *
 * elastic.co/guide/en/elasticsearch/guide/current/nested-query.html
 *
 * @param  {String} path  Name of the field containing the nested fields.
 * @param  {String} type  Name of the desired nested query.
 * @param  {String} field Name of the nested field.
 * @param  {Array}  args  Remaining arguments used to construct nested query.
 * @return {Object}       Nested query.
 */
export default function nestedQuery(path, type, field, ...args) {
  let klass = queries[type]
  let nestedField = `${path}.${field}`
  let query

  if (!klass) {
    throw new Error('Query type not found.', type)
  }

  query = klass(nestedField, ...args)

  return {
    nested: {
      path: path,
      query: query
    }
  }
}
