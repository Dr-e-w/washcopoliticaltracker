export type Official = {
  name: string;
  office: string;
  district: string;
  score: number;
  level: string;
  tag: string;
  initials: string;
  notes: string;
};

export const officials: Official[] = [
  {
    name: "David Trone",
    office: "Former U.S. Representative",
    district: "Maryland 6th District",
    score: 82,
    level: "High Public Risk",
    tag: "Federal trading disclosure",
    initials: "DT",
    notes:
      "Large reported transaction volume, significant personal holdings, and prior public reporting around STOCK Act disclosure timing. Score reflects disclosure and financial-activity risk, not a finding of insider trading."
  },
  {
    name: "April McClain Delaney",
    office: "U.S. Representative",
    district: "Maryland 6th District",
    score: 74,
    level: "Elevated Risk",
    tag: "Active congressional trading",
    initials: "AD",
    notes:
      "Active congressional transaction disclosures and substantial reported trading activity. Score reflects volume and conflict-exposure risk, not a finding of wrongdoing."
  },
  {
    name: "John F. Barr",
    office: "Washington County Commissioner",
    district: "Countywide Board",
    score: 68,
    level: "Elevated Risk",
    tag: "Transparency review",
    initials: "JB",
    notes:
      "Elevated score based on documented concerns around NDA usage, meeting transparency, and public-comment limitations. Launch version should link to meeting minutes, video clips, policy records, and source documents."
  },
  {
    name: "Erika Bell",
    office: "Hagerstown City Council",
    district: "At-Large",
    score: 52,
    level: "Elevated Risk",
    tag: "Public ethics item",
    initials: "EB",
    notes:
      "City biography lists downtown business ownership and Economic Development Board service. A 2025 City Ethics Commission document references a complaint reviewed by the Commission. This is a documentation flag, not a finding of wrongdoing."
  },
  {
    name: "Bill McIntire",
    office: "Mayor of Hagerstown",
    district: "Citywide",
    score: 46,
    level: "Moderate Risk",
    tag: "Procurement review",
    initials: "BM",
    notes:
      "Added as a procurement-transparency review entry. Public launch should verify and source any claims involving city building repairs, related-party contracts, bidding records, recusals, invoices, and meeting documentation before increasing the score."
  },
  {
    name: "Caroline Anderson",
    office: "Hagerstown City Council",
    district: "At-Large",
    score: 36,
    level: "Moderate Risk",
    tag: "Business overlap review",
    initials: "CA",
    notes:
      "City biography lists business ownership and economic development committee service. Requires campaign finance and vote-record review before any stronger conclusion."
  },
  {
    name: "Jeffrey A. Cline",
    office: "Washington County Commissioner",
    district: "Countywide Board",
    score: 31,
    level: "Moderate Risk",
    tag: "Real estate overlap review",
    initials: "JC",
    notes:
      "County biography lists realtor experience. Zoning, land-use, development, and donor records should be cross-checked before increasing score."
  },
  {
    name: "Randall E. “Randy” Wagner",
    office: "Washington County Commissioner",
    district: "Countywide Board",
    score: 29,
    level: "Moderate Risk",
    tag: "Real estate / board overlap",
    initials: "RW",
    notes:
      "County biography lists realtor work and service on planning-related boards. Needs vote-by-vote review before any stronger classification."
  },
  {
    name: "Neil Parrott",
    office: "Washington County Commissioner",
    district: "Countywide Board",
    score: 27,
    level: "Moderate Risk",
    tag: "Public/private background",
    initials: "NP",
    notes:
      "County biography lists engineering, public works, prior state office, and small business ownership. Needs campaign finance and procurement review."
  },
  {
    name: "Randal Leatherman",
    office: "Washington County Commissioner",
    district: "Countywide Board",
    score: 21,
    level: "Low Risk",
    tag: "Baseline monitoring",
    initials: "RL",
    notes:
      "County biography lists prior committee and public safety involvement. No elevated public-record flag added yet."
  },
  {
    name: "Kristin B. Aleshire",
    office: "Hagerstown City Council",
    district: "At-Large",
    score: 20,
    level: "Low Risk",
    tag: "Baseline monitoring",
    initials: "KA",
    notes:
      "City biography lists long public service and employment as Town Manager of Myersville. Track intergovernmental votes and disclosures."
  },
  {
    name: "Tiara Burnett",
    office: "Hagerstown City Council",
    district: "At-Large",
    score: 18,
    level: "Low Risk",
    tag: "Baseline monitoring",
    initials: "TB",
    notes:
      "City biography lists biotechnology experience and nonprofit board service. No elevated public-record flag added yet."
  },
  {
    name: "Sean Flaherty",
    office: "Hagerstown City Council",
    district: "At-Large",
    score: 18,
    level: "Low Risk",
    tag: "Baseline monitoring",
    initials: "SF",
    notes:
      "City biography lists federal/defense-related work and Planning Commission background. Track land-use and contract-related votes."
  }
];
