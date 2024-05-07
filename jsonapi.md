# JSONAPI for document structure

- standardisation of http headers and response status
- https://jsonapi.org/format/

  JSON:API

{

“**data**”: array of resource object values or empty [] or single resource object value /or null

- docs primary data

- an example: a resource object value:

**{**

- **id,**
- **type,**
- **?attributes {** [**key**]**:attributesObject},**
  - an attributes object:
    **{**
    **attr:JSON**
    **},**
- **?relationships {**[**key**]**: relationshipsObject},**

  - key: eg. author
  - a relationship object:
    **{**

    - **links: {**
      - **self:** a `self` [link](https://jsonapi.org/format/#document-links) that basically is the url to get this response resource object
      - **related:** link provides access to [resource objects](https://jsonapi.org/format/#document-resource-objects) [linked](https://jsonapi.org/format/#document-links) in a [relationship](https://jsonapi.org/format/#document-resource-object-relationships)
        **},**
    - **data,**
    - **meta**
      **}**

  - relationship may be to-one or to-many.
  - key name = relationship name
  - a to many relationship object - links - pagination links paginate relationship data

- **?links**

  - **{[key]: link Object OR [key]:String}, -** used to represent links

    - - link object (\*web link)

        {

        **href:**

        **\*\*\*\***?rel: -**\*\*\*\*** link’s relation type

        **?describedby:** link to description document

        **?title:** a string which serves as a label for the destination of a link

        **?type:** a string indicating the media type of the link’s target.

        **?hreflang:** a string or an array of strings indicating the language(s) of the link’s target

        **?meta:** a meta object containing non-standard meta-information about the link

        }

- **?meta { [key]: {value}} -** used to include non-standard meta-information
  - can put any data

**}**

- must atleast have
  - 1. **id** (unless its from clientside to create a new resource use **lid**)
  - 2. **type**
- Keys that reference related resources (e.g. `author_id`) **SHOULD NOT** appear as attributes. Instead, [relationships](https://jsonapi.org/format/#document-resource-object-relationships) **SHOULD** be used.
- **?attributes** {} and **?relationships** {} of an object are collectively called fields **-** MUST have same namespace
  (OR)

“**errors**”: array of error objects

”**meta**”: - meta object containing non-standard meta info

“**jsonapi**”: - include information about implementation - object describing servers implementation

{

**?version**: whose value is a string indicating the highest JSON:API version supported.

**?ext:** an array of URIs for all applied [extensions](https://jsonapi.org/format/#extensions).

**?profile:** an array of URIs for all applied [profiles](https://jsonapi.org/format/#profiles).

**?meta:** a [meta](https://jsonapi.org/format/#document-meta) object that contains non-standard meta-information.

}

”**links**”: {

?“**self**”:{

type: JSON:API media/type

}

- link that generated response doc - if link has type (ext / profile include it)

- allows a client to refresh the data represented by the current response
- link must contain the query parameters provided by the client to generate the response document

?“**related**”: when primary data represents resource relationship

?“**describedby**”: [link](https://jsonapi.org/format/#document-links-link) to a description document (e.g. OpenAPI or JSON Schema)

?“**pagination**”: links for the primary data.

}

“**included**”: (ONLY if “data” exists) - array of resource objects related to primary **data**

}

# JSON

example of a json object

```json
"id_template":
{
	"landing":{
		"feature":true,
		"heading1":"smallerHeading",
		"heading2":"biggerHeading",
		"feature_text":""
	},
	"project_folder":"",
	"project_name":"",
	"thumbnail":".jpg",
	"background_image":".jpg",
	"project_info":"",
	"project_info_details":
	[
		{"date":""},
		{"project_type":""},
		{"client":""},
		{"link":{
				"label":"",
				"url":"http://"
			}
		}
	],
	"gallery":[
		{
			"type":"image or video",
			"image_slidethumb":".jpg",
			"image_thumb":".jpg",
			"image":".jpg",
			"video_link":""
		}
	]
}
```

## limiting returned posts

- https://jsonplaceholder.typicode.com/posts?_limit=3
