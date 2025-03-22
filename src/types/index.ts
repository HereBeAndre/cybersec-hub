type Operator = "AND" | "OR";

interface Description {
  lang: string;
  value: string;
}

interface BaseMetric {
  source: string;
  type: string;
  exploitabilityScore: number;
  impactScore: number;
}

interface BaseCvssData {
  version: string;
  baseScore: number;
  confidentialityImpact: string;
  integrityImpact: string;
  availabilityImpact: string;
}

export interface Vulnerability {
  id: string;
  cveTags?: {
    sourceIdentifier: string;
    tags: string[];
  }[];
  descriptions: Description[];
  metrics?: {
    cvssMetricV30?: BaseMetric &
      {
        cvssData: BaseCvssData & {
          baseSeverity: string;
          attackVector: string;
          attackComplexity: string;
          privilegesRequired: string;
          userInteraction: string;
          scope: string;
        };
      }[];
    cvssMetricV2?: BaseMetric &
      {
        cvssData: BaseCvssData & {
          accessVector: string;
          accessComplexity: string;
          authentication: string;
        };
        baseSeverity: string;
        acInsufInfo: boolean;
        obtainAllPrivilege: boolean;
        obtainUserPrivilege: boolean;
        obtainOtherPrivilege: boolean;
      }[];
  };
  weaknesses?: {
    source: string;
    type: string;
    description: Description[];
  }[];
  configurations?: {
    nodes: {
      operator: Operator;
      negate: boolean;
      cpeMatch: {
        vulnerable: boolean;
        criteria: string;
        matchCriteriaId: string;
      }[];
    }[];
  }[];
  references: {
    url: string;
    source: string;
  }[];
  vendorComments?: {
    organization: string;
    comment: string;
    lastModified: string;
  }[];
  sourceIdentifier: string;
  published: string;
  lastModified: string;
  vulnStatus: string;
}
