# General On-Demand Feed Specification

GOFS is an open source, community-driven data standard for traveler-facing information about demand responsive transportation.

[GOFS GitHub repo](https://github.com/MobilityData/GOFS)

## GOFS provides real-time information about point-to-point, demand-responsive service within a zone, using a lightweight, easy-to-implement format. It serves a distinct purpose from GTFS-Flex or other data standards and extensions.

# Which standard(s) should be used for which types of transportation?

### Taxi / Ridehail

### [GOFS](https://github.com/MobilityData/GOFS)

### Demand-responsive transit:

### Zone based (“Microtransit”)

### [GOFS](https://github.com/MobilityData/GOFS) (includes real-time) or [GTFS-Flex (zone)](https://gtfs.org/documentation/schedule/examples/flex/#on-demand-services-within-a-single-zone) (static only)

### Demand-responsive transit:

### Predefined routes with deviation

### [GTFS-Flex (deviated route)](https://gtfs.org/documentation/schedule/examples/flex/#deviated-route)

### Fixed stops

### [GTFS-Flex (specific locations)](https://gtfs.org/documentation/schedule/examples/flex/#on-demand-services-where-riders-must-be-picked-up-and-dropped-off-at-specific-locations)

### Fixed-route transit

### [GTFS](https://gtfs.org/)

### Self-service shared vehicles:

### carshare, bikeshare, etc.

### [GBFS](https://gbfs.org/)

# Microtransit: When to use GOFS vs. GTFS-Flex?

**Agencies may elect to use either or both standards for zone-based demand-responsive transit (“microtransit”).**

GOFS is hosted in a separate dataset from fixed-route information but may allow for simpler implementation and includes additional functionally like estimated realtime pricing and availability.

**Apps supporting: See [GOFS README.md](https://github.com/MobilityData/GOFS#gofs)**

[GTFS-Flex](https://gtfs.org/documentation/schedule/examples/flex/#on-demand-services-within-a-single-zone) represents service information for trip planning in a single dataset alongside the rest of the agency’s fixed-route data. It does not include real-time information.

**Apps supporting: See [GTFS-Flex adoption tracker](https://gtfs.org/community/extensions/flex/#adoption-tracker).**

An open-source [converter](https://pypi.org/project/GTFS-flex-to-GOFS/) enables conversion from GTFS-Flex to GOFS. Developed and maintained by [Transit](https://github.com/TransitApp).

# What about other types of transportation services?

A number of additional use cases were identified by the initial GOFS Working Group. We encourage discussion about implementation of these use cases in the [GOFS GitHub repo](https://github.com/MobilityData/GOFS).

# Key Questions on Using and Implementing GOFS

### What about deeper integrations including open booking APIs?

A handful of emerging pilot projects exist. We encourage discussion about implementation of these use cases in the [GOFS GitHub repo](https://github.com/MobilityData/GOFS).

### How do I get started using GOFS? Where is there documentation?

Consult the official [GOFS specification on GitHub](https://github.com/MobilityData/GOFS) to understand the required data fields and structure for your on-demand service, then develop a process to generate this data accurately from your operational systems.

### What’s the level of effort to implement GOFS?

Generally medium-to-low effort: existing technology systems usually already have the required data. Data producers should focus on understanding the GOFS standard and accurately transforming existing service data into GOFS.

### Why open data standards?

There is a wide variety of demand-responsive transportation services. It is challenging for travellers to get an overview of their options. Standardization allows common journey planning apps to easily integrate a multitude of transportation providers. Read more at [MDIP](https://www.interoperablemobility.org/).

[GOFS GitHub repo](https://github.com/MobilityData/GOFS)

# Who can I contact? Where is there support on GOFS adoption?

MobilityData hosts a [#GOFS Slack channel](https://mobilitydata-io.slack.com/archives/C08TGF1HM9Q) [(MobilityData Slack first time registration)](https://share.mobilitydata.org/slack) for stakeholders to offer peer support.

[Join Slack](https://share.mobilitydata.org/slack)
