interface Metadata {
  tags: any[];
}

interface SysLink {
  type: string;
  linkType: string;
  id: string;
}

interface SysSpace {
  sys: SysLink;
}

interface SysEnvironment {
  sys: SysLink;
  id: string;
  type: string;
  linkType: string;
}

interface ContentType {
  sys: SysLink;
}

interface Picture {
  sys: SysLink;
}

interface Fields {
  name: string;
  picture: Picture;
}

interface AuthorEntry {
  metadata: Metadata;
  sys: {
    space: SysSpace;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: SysEnvironment;
    revision: number;
    contentType: ContentType;
    locale: string;
  };
  fields: Fields;
}
