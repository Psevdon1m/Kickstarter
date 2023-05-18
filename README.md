# Kickstarter Smart Contract

This smart contract represents a Kickstarter campaign on the Ethereum blockchain. It is created as a part of Udemy solidity course. It allows participants to contribute funds and vote on requests made by the campaign manager for spending those funds.

## CampaingFactory Contract

The `CampaingFactory` contract serves as a factory for deploying new Kickstarter campaigns. It keeps track of the deployed campaign contracts and provides a function to create new campaigns.

### Functions

- `createCampaign`: Creates a new Kickstarter campaign by deploying a `Kickstarter` contract and adding it to the list of deployed campaigns.
- `getDeployedCampaigns`: Retrieves the addresses of all deployed Kickstarter campaigns.

## Kickstarter Contract

The `Kickstarter` contract represents an individual Kickstarter campaign. It allows contributors to donate funds, vote on spending requests, and finalize approved requests to transfer funds to the designated recipient.

### Structures

- `Request`: Represents a spending request made by the campaign manager. It includes a description, value, recipient address, approval status, and the number of approvals received.

### Variables

- `manager`: Address of the campaign manager (creator of the campaign).
- `minimumContribution`: Minimum amount required for contributors to participate in the campaign.
- `requests`: Array of spending requests made by the campaign manager.
- `approvers`: Mapping of addresses that have contributed to the campaign.
- `approversCount`: Number of contributors/approvers.

### Modifiers

- `restricted`: Restricts access to certain functions to only the campaign manager.

### Functions

- `contribute`: Allows contributors to donate funds to the campaign, requiring a minimum contribution amount.
- `createRequest`: Enables the campaign manager to create a spending request, specifying a description, recipient, and value.
- `approveRequest`: Allows campaign contributors to vote/approve a spending request.
- `finalizeRequest`: Enables the campaign manager to finalize a spending request, transferring funds to the recipient if approved by the majority of contributors.
- `getSummary`: Retrieves campaign summary information, including the minimum contribution, campaign balance, number of requests, number of contributors, and the campaign manager's address.
- `getRequestsCount`: Retrieves the total number of spending requests made by the campaign manager.

## License

This smart contract is released under the UNLICENSED SPDX-License-Identifier.
