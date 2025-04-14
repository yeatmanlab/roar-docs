# Type Aliases
Type aliases provide reusable type definitions used throughout the ROAR Firebase Functions backend architecture. These custom types ensure type safety and clear interfaces across the system.

## Filter Types

### [BaseFilter](type-aliases/BaseFilter.md)
Union type combining SingleFilter and CompositeFilter for representing filter structures.

### [ComparisonOperator](type-aliases/ComparisonOperator.md)
Defines available comparison operators for filtering operations.

### [Condition](type-aliases/Condition.md)
Union type for different condition types (Field, Composite, SelectAll).

## Firestore Event Types

### [DocumentCreatedEvent](type-aliases/DocumentCreatedEvent.md)
Type for Firestore document creation events.

### [DocumentDeletedEvent](type-aliases/DocumentDeletedEvent.md)
Type for Firestore document deletion events.

### [DocumentUpdatedEvent](type-aliases/DocumentUpdatedEvent.md)
Type for Firestore document update events.

### [DocumentWrittenEvent](type-aliases/DocumentWrittenEvent.md)
Type for Firestore document write events.

## Value Types

### [ParameterValue](type-aliases/ParameterValue.md)
Union type for valid parameter values (boolean, number, string, Date).

### [SelectAllCondition](type-aliases/SelectAllCondition.md)
Type representing a condition that selects all items.

## Key Benefits

- Type safety across the application
- Clear abstractions for complex types
- Consistent type usage patterns
- Better code organization
- Enhanced maintainability

For more details on each type alias, see the individual documentation pages linked above.
